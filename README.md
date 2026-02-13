# Python-API-Automation-Testing-Framework

A professional REST API automation testing framework built with Python, pytest, and requests. Designed for robust, scalable, and maintainable API test automation.

## 🎯 Features

- **Comprehensive Test Suite**: Unit tests, integration tests, and error handling tests
- **pytest Framework**: Powerful testing with fixtures, markers, and plugins
- **API Testing**: Full CRUD operations, authentication, error handling
- **Professional Configuration**: pytest.ini, conftest.py with shared fixtures
- **Type Hints**: Full Python type annotations for better code quality
- **Session Management**: Reusable API session with custom headers
- **Detailed Assertions**: Comprehensive assertions for status codes, headers, response bodies
- **Error Handling**: Tests for edge cases, invalid inputs, and error scenarios
- **Response Validation**: Headers, content-type, response time assertions
- **Fixture-Driven**: Reusable test data through pytest fixtures

## 📦 Project Structure

```
Python-API-Automation-Testing-Framework/
├── tests/
│   ├── conftest.py              # Shared pytest fixtures and configuration
│   ├── test_auth.py             # Authentication API tests
│   ├── test_crud.py             # CRUD operations tests
│   └── test_error_handling.py   # Error handling and edge case tests
├── pytest.ini                   # pytest configuration
├── requirements.txt             # Python dependencies
├── .gitignore                   # Git ignore rules
├── README.md                    # This file
└── TEST_RESULTS.md              # Test execution results and documentation
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ErGranPepe/Python-API-Automation-Testing-Framework.git
cd Python-API-Automation-Testing-Framework
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## 🧪 Running Tests

### Run all tests:
```bash
pytest -v
```

### Run specific test file:
```bash
pytest tests/test_auth.py -v
```

### Run specific test function:
```bash
pytest tests/test_crud.py::TestCRUDOperations::test_get_users_list -v
```

### Run tests by marker:
```bash
pytest -m unit -v          # Run only unit tests
pytest -m integration -v   # Run only integration tests
pytest -m auth -v         # Run only authentication tests
pytest -m crud -v         # Run only CRUD tests
```

### Run with coverage:
```bash
pytest --cov=tests tests/ -v
```

## 📋 Test Coverage

### Authentication Tests (test_auth.py)
- Valid credentials authentication
- Invalid credentials rejection
- Login error handling
- Response validation

### CRUD Operations Tests (test_crud.py)
- GET: Retrieve list and single resources
- POST: Create new resources
- PUT: Full resource update
- PATCH: Partial resource update
- DELETE: Resource deletion
- Response validation and data integrity

### Error Handling Tests (test_error_handling.py)
- Invalid endpoint handling
- Invalid resource IDs
- Malformed requests
- Missing required fields
- Response headers validation
- Response time validation
- Large page numbers
- Special characters handling
- XSS payload protection

## 🔧 Configuration

### pytest.ini
Configure test discovery, output format, and markers:
```ini
[pytest]
addopts = -v --tb=short --strict-markers --disable-warnings
testpaths = tests
python_files = test_*.py
markers =
    slow: slow tests
    integration: integration tests
    unit: unit tests
    auth: authentication tests
    crud: CRUD operations tests
```

### conftest.py
Shared fixtures for all tests:
- `api_base_url`: Base URL for API endpoints
- `api_session`: Configured requests session with proper headers
- `valid_credentials`: Valid authentication credentials
- `invalid_credentials`: Invalid test credentials
- `test_user_data`: Sample user data for CRUD operations
- `log_test_info`: Automatic test logging

## 📊 API Endpoints Tested

This framework tests the following endpoints (using ReqRes.in as the test API):

- `GET /users` - Get list of users
- `GET /users/{id}` - Get single user
- `POST /users` - Create new user
- `PUT /users/{id}` - Update user (full)
- `PATCH /users/{id}` - Update user (partial)
- `DELETE /users/{id}` - Delete user
- `POST /login` - User authentication

## 💻 Dependencies

See `requirements.txt` for full list:
- `requests`: HTTP library for API calls
- `pytest`: Testing framework
- `pytest-cov`: Code coverage plugin

## 🎓 Best Practices Implemented

1. **Test Isolation**: Each test is independent and can run in any order
2. **DRY Principle**: Fixtures eliminate code duplication
3. **Meaningful Assertions**: Clear assertion messages for debugging
4. **Type Safety**: Full type hints for better IDE support
5. **Clean Code**: Well-organized, readable test code
6. **Session Reuse**: Efficient HTTP session management
7. **Comprehensive Logging**: Built-in test execution logging
8. **Error Scenarios**: Tests for both happy and sad paths
9. **Configuration Management**: Externalized test configuration
10. **Documentation**: Well-documented code and README

## 📈 Results & Metrics

For detailed test results, see [TEST_RESULTS.md](TEST_RESULTS.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## ✉️ Contact

Created by ErGranPepe - Feel free to reach out for questions or suggestions!

---

**Happy Testing! 🧪✨**
