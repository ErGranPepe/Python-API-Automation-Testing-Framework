"""CRUD Operations API Tests"""
import pytest
import requests
from typing import Dict, Any

@pytest.mark.crud
class TestCRUDOperations:
    """Test CRUD operations on API endpoints"""
    
    @pytest.mark.unit
    def test_get_users_list(self, api_session, api_base_url):
        """Test retrieving list of users"""
        response = api_session.get(f"{api_base_url}/users", timeout=10)
        assert response.status_code == 200
        assert "data" in response.json()
        data = response.json()["data"]
        assert isinstance(data, list)
        assert len(data) > 0
    
    @pytest.mark.unit
    def test_get_single_user(self, api_session, api_base_url):
        """Test retrieving a single user by ID"""
        user_id = 1
        response = api_session.get(f"{api_base_url}/users/{user_id}", timeout=10)
        assert response.status_code == 200
        user = response.json()["data"]
        assert user["id"] == user_id
        assert "email" in user
        assert "first_name" in user
    
    @pytest.mark.integration
    def test_create_user(self, api_session, api_base_url, test_user_data):
        """Test creating a new user"""
        response = api_session.post(
            f"{api_base_url}/users",
            json=test_user_data,
            timeout=10
        )
        assert response.status_code == 201
        created_user = response.json()
        assert created_user["name"] == test_user_data["name"]
        assert "id" in created_user
        assert "createdAt" in created_user
    
    @pytest.mark.integration
    def test_update_user(self, api_session, api_base_url, test_user_data):
        """Test updating an existing user"""
        user_id = 1
        updated_data = {"name": "Updated User", "job": "Senior Engineer"}
        response = api_session.put(
            f"{api_base_url}/users/{user_id}",
            json=updated_data,
            timeout=10
        )
        assert response.status_code == 200
        result = response.json()
        assert result["name"] == updated_data["name"]
        assert result["job"] == updated_data["job"]
    
    @pytest.mark.integration
    def test_partial_update_user(self, api_session, api_base_url):
        """Test partial update (PATCH) of user"""
        user_id = 1
        patch_data = {"job": "Senior DevOps Engineer"}
        response = api_session.patch(
            f"{api_base_url}/users/{user_id}",
            json=patch_data,
            timeout=10
        )
        assert response.status_code == 200
        result = response.json()
        assert result["job"] == patch_data["job"]
    
    @pytest.mark.integration
    def test_delete_user(self, api_session, api_base_url):
        """Test deleting a user"""
        user_id = 1
        response = api_session.delete(
            f"{api_base_url}/users/{user_id}",
            timeout=10
        )
        assert response.status_code == 204
