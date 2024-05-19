# Project Setup Instructions

Before getting started, ensure that you have Python and Node.js installed on your system. You can download Python from the official Python website and Node.js from the official Node.js website.
https://www.python.org/downloads/ 
https://nodejs.org/en/download 

## Project Download

1. Download the project from: https://github.com/Alxflem/DA109A_GROUP16/archive/refs/tags/V7.zip

2. extract the files from the downloaded zip file

## Backend Setup

3. Open the terminal/command prompt on your computer
4. Navigate to the "DA109A_GROUP16" folder where you extracted the zipped files
5. Change directory to the backend folder: cd backend
6. Create a python virtual environment with
```python -m venv <path>``` for winows
```python3 -m venv <path>``` for macOS
and activate it with
```.\<path>\Scripts\activate``` for windows
```source <path>/bin/activate``` for macOS

7. Install the required libraries with
	```pip install -r requirements.txt```

8. Go back to the main project folder: cd ..

## Frontend Setup

9. Change directory to the frontend folder: cd frontend

10. Install the required Node.js packages: npm install

## Start Frontend

11. Make sure you are in the frontend directory: cd frontend

12. Run the following command to start the frontend: npm run dev

## Start Backend

13. Open a new terminal/command prompt and navigate to the project folder like in step 4

14. Make sure you are in the backend directory: cd backend

    If you are in the frontend directory, go back to the main project folder: cd ..

    Then, navigate to the backend directory: cd backend

15. Run the following command to start the backend or by pressing the start button in an IDE with main.py as the chosen file: python main.py

(16.) To update prices as well run "python main.py -u" instead


Now, your project should be up and running. Access the frontend at http://localhost:5173 and the backend at http://localhost:5000
