import pytest
import requests
from typing import Dict, Any
import json
from datetime import datetime

# API Configuration
BASE_URL = "https://reqres.in/api"
TIMEOUT = 10

@pytest.fixture(scope="session")
def api_base_url():
    """Return the API base URL"""
    return BASE_URL

@pytest.fixture(scope="function")
def api_session():
    """Create and configure a requests session"""
    session = requests.Session()
    session.headers.update({
        "Content-Type": "application/json",
        "User-Agent": "Python-API-Testing-Framework/1.0"
    })
    yield session
    session.close()

@pytest.fixture(scope="function")
def valid_credentials() -> Dict[str, str]:
    """Provide valid test credentials"""
    return {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

@pytest.fixture(scope="function")
def invalid_credentials() -> Dict[str, str]:
    """Provide invalid test credentials"""
    return {
        "email": "invalid@test.com",
        "password": "wrongpassword"
    }

@pytest.fixture(scope="function")
def test_user_data() -> Dict[str, Any]:
    """Provide test user data for CRUD operations"""
    return {
        "name": "Test User",
        "job": "QA Engineer"
    }

@pytest.fixture(autouse=True)
def log_test_info(request):
    """Log test execution info"""
    print(f"\n\nTest Started: {request.node.name}")
    print(f"Time: {datetime.now().isoformat()}")
    yield
    print(f"Test Completed: {request.node.name}")
