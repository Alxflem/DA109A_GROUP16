# DA109A_GROUP16

# Project Setup Instructions

Before getting started, ensure that you have Python and Node.js installed on your system. You can download Python from the [official Python website](https://www.python.org/downloads/) and Node.js from the [official Node.js website](https://nodejs.org/).

## Project Download

1. Download the project from: https://github.com/Alxflem/DA109A_GROUP16/archive/refs/tags/V1.zip

2. extract the files from the downloaded zip file

## Backend Setup

3. Open the terminal/command prompt on your computer
4. Navigate to the "DA109A_GROUP16" folder where you extracted the zipped files
5. Change directory to the backend folder:

    ```bash
    cd backend
    ```

6. Install the required Python packages:

    ```bash
    pip install flask flask-cors requests psycopg2
    ```

    If the above command doesn't work, you can try:

    ```bash
    pip3 install flask
    pip3 install flask-cors
    pip3 install psycopg2
    pip3 install requests
    ```

    If psycopg2 does not work run the commands as before but replace psycopg2 with                            
    psycopg2-binary

7. Go back to the main project folder:

    ```bash
    cd ..
    ```

## Frontend Setup

8. Change directory to the frontend folder:

    ```bash
    cd frontend
    ```

9. Install the required Node.js packages:

    ```bash
    npm install
    ```

## Start Frontend

10. Make sure you are in the frontend directory:

    ```bash
    cd frontend
    ```

11. Run the following command to start the frontend:

    ```bash
    npm run dev
    ```

## Start Backend

12. Open a new terminal/command prompt and navigate to the project folder like in step 4

13. Make sure you are in the backend directory:

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

14. Run the following command to start the backend on port 5000:

    ```bash
    python main.py
    ```

Now, your project should be up and running. Access the frontend at [http://localhost:5173](http://localhost:5173) and the backend at [http://localhost:5000](http://localhost:5000).