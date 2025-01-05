# JWT Django Project

This project is a Django application that uses JSON Web Tokens (JWT) for authentication.

## Features

- User registration and login
- JWT-based authentication
- Protected routes requiring authentication
- Token refresh and blacklist

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/jwt-django.git
    cd jwt-django
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:

    ```bash
    python manage.py migrate
    ```

5. Create a superuser:

    ```bash
    python manage.py createsuperuser
    ```

6. Run the development server:

    ```bash
    python manage.py runserver
    ```

## Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Build the React application:

    ```bash
    npm run build
    ```

4. Start the React development server:

    ```bash
    npm start
    ```

The React application should now be running on `http://localhost:5173`.

## Running Tests

To run tests for the Django application, use the following command:

```bash
python manage.py test
```

To run tests for the React frontend, use the following command:

```bash
npm test
```

## Usage

- Access the admin panel at `http://127.0.0.1:8000/admin/`
- Register a new user at `http://127.0.0.1:8000/api/register/`
- Obtain a token at `http://127.0.0.1:8000/api/token/`
- Refresh a token at `http://127.0.0.1:8000/api/token/refresh/`

## API Endpoints

- `POST /api/token/` - Obtain a JWT token
- `POST /api/token/refresh/` - Refresh the JWT token
