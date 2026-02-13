"""Authentication API Tests"""
import pytest
import requests
from typing import Dict, Any


class TestAuthentication:
    """Test suite for authentication endpoints"""

    BASE_URL = "https://reqres.in/api"

    @pytest.mark.smoke
    def test_valid_login(self):
        """Test successful login with valid credentials"""
        payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        response = requests.post(
            f"{self.BASE_URL}/login",
            json=payload,
            timeout=10
        )

        assert response.status_code == 200
        data = response.json()
        assert "token" in data
        assert data["token"] != ""

    @pytest.mark.regression
    def test_invalid_password(self):
        """Test login fails with invalid password"""
        payload = {
            "email": "eve.holt@reqres.in",
            "password": "wrongpassword"
        }
        response = requests.post(
            f"{self.BASE_URL}/login",
            json=payload,
            timeout=10
        )

        assert response.status_code == 400
        assert "error" in response.json()

    @pytest.mark.regression
    def test_missing_email(self):
        """Test login fails when email is missing"""
        payload = {"password": "cityslicka"}
        response = requests.post(
            f"{self.BASE_URL}/login",
            json=payload,
            timeout=10
        )

        assert response.status_code == 400

    @pytest.mark.regression
    def test_missing_password(self):
        """Test login fails when password is missing"""
        payload = {"email": "eve.holt@reqres.in"}
        response = requests.post(
            f"{self.BASE_URL}/login",
            json=payload,
            timeout=10
        )

        assert response.status_code == 400

    @pytest.mark.performance
    def test_login_response_time(self):
        """Test login response time is within acceptable range"""
        payload = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        response = requests.post(
            f"{self.BASE_URL}/login",
            json=payload,
            timeout=10
        )

        assert response.elapsed.total_seconds() < 2, "Response time too slow"
        assert response.status_code == 200
