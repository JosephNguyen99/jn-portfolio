# jn-portolio/backend/app/__init__.py
# Initialize the app and configure it to use SQLAlchemy and MongoDB.

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_pymongo import PyMongo
from flask_migrate import Migrate   # Import Migrate for seed_data.py to migrate simple DB info for portfolio
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()
mongo = PyMongo()
migrate = Migrate() # Initialize Migrate

def create_app():
    # Creating an instance of the running app
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS for all routes
    CORS(app)

    # Initializing the app with respective databases
    db.init_app(app)
    mongo.init_app(app)
    migrate.init_app(app, db)   # Set up Flask-Migrate

    # Establishing routes importing as a blueprint
    from app.routes.project_routes import project_bp
    from app.routes.home_routes import home_bp
    app.register_blueprint(project_bp)
    app.register_blueprint(home_bp)

    return app