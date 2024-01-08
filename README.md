# DA109A_GROUP16

# Project Setup Instructions

Before getting started, ensure that you have Python and Node.js installed on your system. You can download Python from the [official Python website](https://www.python.org/downloads/) and Node.js from the [official Node.js website](https://nodejs.org/).

## Project Download

1. Download the project to your local machine.

## Backend Setup

2. Open the terminal/command prompt.
3. Navigate to the "DA109A_GROUP16" folder.
4. Change directory to the backend folder:

    ```bash
    cd backend
    ```

5. Install the required Python packages:

    ```bash
    pip install flask flask-cors requests psycopg2-binary
    ```

    If the above command doesn't work, you can try:

    ```bash
    pip3 install flask
    pip3 install flask-cors
    pip3 install psycopg2-binary
    pip3 install requests
    ```

6. Go back to the main project folder:

    ```bash
    cd ..
    ```

## Frontend Setup

7. Change directory to the frontend folder:

    ```bash
    cd frontend
    ```

8. Install the required Node.js packages:

    ```bash
    npm install
    ```

## Start Frontend

9. Make sure you are in the frontend directory:

    ```bash
    cd frontend
    ```

10. Run the following command to start the frontend:

    ```bash
    npm run dev
    ```

## Start Backend

11. Make sure you are in the backend directory:

    ```bash
    cd backend
    ```

    If you are in the frontend directory, go back to the main project folder:

    ```bash
    cd ..
    ```

    Then, navigate to the backend directory:

    ```bash
    cd backend
    ```

12. Run the following command to start the backend on port 5000:

    ```bash
    python main.py
    ```

Now, your project should be up and running. Access the frontend at [http://localhost:5173](http://localhost:5173) and the backend at [http://localhost:5000](http://localhost:5000).