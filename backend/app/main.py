# jn-portolio/backend/app/main.py

"""
Entry point of flask app. Will be running instance of the app.
All of these running instances of __init__.py, config.py, and main.py will handle the Model View Controller (MVC) for scalability and modularity
Model - Handles the database interaction, this could be in a dir of models/ or just a models.py if it is a small project. Flask/Django typically doesn't follow MVC but we are doing so for good practice.
View - Handles the frontend (React) from the provided APIs of Controller
Controller - Handles the routes/API calls and request between backend and frontend
"""

from flask import Flask
from .config import Config   # Creating a config.py for centralizing modules
from app import create_app  # Storing create_app() func inside __init__ for cleaner separation

# This creates the variable for running instance of app
app = create_app()

if __name__ == "__main__":
    # Running instance with debug to True for testing the app
    app.run(debug=True)