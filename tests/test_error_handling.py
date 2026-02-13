"""Error Handling and Edge Case Tests"""
import pytest
import requests
from requests.exceptions import Timeout, ConnectionError

@pytest.mark.unit
class TestErrorHandling:
    """Test error handling and edge cases"""
    
    def test_invalid_endpoint(self, api_session, api_base_url):
        """Test request to invalid endpoint"""
        response = api_session.get(
            f"{api_base_url}/invalid",
            timeout=10
        )
        assert response.status_code == 404
    
    def test_invalid_user_id(self, api_session, api_base_url):
        """Test request with invalid user ID"""
        response = api_session.get(
            f"{api_base_url}/users/999999",
            timeout=10
        )
        assert response.status_code == 404
    
    def test_invalid_json_body(self, api_session, api_base_url):
        """Test POST with invalid JSON body"""
        response = api_session.post(
            f"{api_base_url}/users",
            data="invalid json",
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        assert response.status_code in [400, 422]
    
    def test_missing_required_fields(self, api_session, api_base_url):
        """Test POST with missing required fields"""
        response = api_session.post(
            f"{api_base_url}/users",
            json={},
            timeout=10
        )
        # Empty JSON is still valid for this API
        assert response.status_code in [201, 400]
    
    def test_response_headers(self, api_session, api_base_url):
        """Test response contains proper headers"""
        response = api_session.get(
            f"{api_base_url}/users",
            timeout=10
        )
        assert "content-type" in response.headers
        assert "application/json" in response.headers["content-type"]
    
    def test_response_time(self, api_session, api_base_url):
        """Test response time is reasonable"""
        response = api_session.get(
            f"{api_base_url}/users",
            timeout=10
        )
        # Response should complete in less than 5 seconds
        assert response.elapsed.total_seconds() < 5
    
    def test_large_page_number(self, api_session, api_base_url):
        """Test with large page number parameter"""
        response = api_session.get(
            f"{api_base_url}/users?page=999",
            timeout=10
        )
        # API should handle gracefully
        assert response.status_code in [200, 404]
    
    def test_special_characters_in_data(self, api_session, api_base_url):
        """Test special characters handling"""
        special_data = {
            "name": "Test!@#$%^&*()",
            "job": "Testing <script>alert('xss')</script>"
        }
        response = api_session.post(
            f"{api_base_url}/users",
            json=special_data,
            timeout=10
        )
        assert response.status_code == 201
