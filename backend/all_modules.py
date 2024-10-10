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


# jn-portolio/backend/app/config.py

import os

# Set up configuration for SQLAlchemy (ORM w/ RDMS) and MongoDB (DBMS)
class Config:
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql+pymysql://root:06141999@localhost/db_name'   # added +pymysql after mysql since we added pymysql for import
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:06141999@localhost/portfolio_db'
    SQLACHEMY_TRACK_MODIFICATIONS = False
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/project'


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


# jn-portfolio/backend/app/models/about_me.py
from app import db

class About(db.Model):
    __tablename__ = 'about'  # This is necessary to explicitly define the table name
    id = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.Text, nullable=False)
    picture_url = db.Column(db.String(250), nullable=True)

    def as_dict(self):
        return {
            "id": self.id,
            "bio": self.bio,
            "picture_url": self.picture_url
        }
    

# jn-portfolio/backend/app/models/hobbies.py
from app import db

class Hobby(db.Model):
    __tablename__ = 'hobbies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }


# jn-portfolio/backend/app/models/interests.py
from app import db

class Interest(db.Model):
    __tablename__ = 'interests'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }

# jn-portolio/backend/app/models/project.py

"""
Below is a MongoDB or NoSQL approach
"""

from app import mongo

def add_project_to_mongo(data):
    mongo.db.projects.insert_one(data)

def get_projects_from_mongo():
    return list(mongo.db.projects.find({}))


# jn-portfolio/backend/app/models/skills.py
from app import db

class Skill(db.Model):
    __tablename__ = 'skills'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def as_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }
# jn-portfolio/backend/app/routes/home_routes.py
from flask import jsonify, Blueprint
from app.models.about_me import About
from app.models.skills import Skill
from app.models.interests import Interest
from app.models.hobbies import Hobby

home_bp = Blueprint('home', __name__)

@home_bp.route('/api/home', methods=['GET'])
def get_home_content():
    # # Query all of the models per each category
    # about_me_record = About.query.first()
    # skills_records = Skill.query.all()
    # interests_records = Interest.query.all()
    # hobbies_records = Hobby.query.all()

    # # Print the data to see if the queries return anything
    # print("About Me:", about_me_record)
    # print("Skills:", skills_records)
    # print("Interests:", interests_records)
    # print("Hobbies:", hobbies_records)

    # about_me = about_me_record.as_dict() if about_me_record else {}
    # skills = [skill.as_dict() for skill in skills_records]
    # interests = [interest.as_dict() for interest in interests_records]
    # hobbies = [hobby.as_dict() for hobby in hobbies_records]

    # Query all of the models per each category
    about_me = About.query.first().as_dict() if About.query.first() else {}
    skills = [skill.as_dict() for skill in Skill.query.all()]
    interests = [interest.as_dict() for interest in Interest.query.all()]
    hobbies = [hobby.as_dict() for hobby in Hobby.query.all()]

    # Return JSON response with the correct data attribute
    return jsonify({
        "about_me": about_me,
        "skills": skills,
        "interests": interests,
        "hobbies": hobbies
    })


# jn-portolio/backend/app/routes/project_routes.py


from flask import Blueprint, jsonify, request
from app import mongo
from bson import ObjectId
from app.services.project_service import (
    add_project, get_all_projects, get_project_by_id, update_project, delete_project
)

project_bp = Blueprint('project', __name__)

# Route for testing MongoDB connection
@project_bp.route('/api/mongo-test', methods=['GET'])
def mongo_test():
    return jsonify({"message": "MongoDB is connected"})

# Get all projects
@project_bp.route('/api/projects', methods=['GET'])
def get_projects():
    projects = get_all_projects()
    return jsonify(projects)

# Create a new project
@project_bp.route('/api/projects', methods=['POST'])
def create_project():
    project_data = request.get_json()
    project_id = add_project(project_data)
    return jsonify({"message": "Project added", "id": str(project_id)})

# Get a single project by ID
@project_bp.route('/api/projects/<id>', methods=['GET'])
def get_project(id):
    project = get_project_by_id(ObjectId(id))
    return jsonify(project)

# Update a project by ID
@project_bp.route('/api/projects/<id>', methods=['PUT'])
def update_project_route(id):
    update_data = request.get_json()
    update_project(ObjectId(id), update_data)
    return jsonify({"message": "Project updated"})

# Delete a project by ID
@project_bp.route('/api/projects/<id>', methods=['DELETE'])
def delete_project_route(id):
    delete_project(ObjectId(id))
    return jsonify({"message": "Project deleted"})


# Use services to encapsulate complex business logic or database interactions. 
# This can make code a lot more modular

from app import mongo

def save_contact_form(data):
    mongo.db.contacts.insert_one(data)

from bson import ObjectId

def add_project(project_data):
    result = mongo.db.projects.insert_one(project_data)
    return result.inserted_id

def get_all_projects():
    # Get all projects and convert ObjectId to string for JSON serialization
    projects = mongo.db.projects.find({})
    project_list = []
    for project in projects:
        project['_id'] = str(project['_id'])  # Convert ObjectId to string
        project_list.append(project)
        
    # Log the projects to the console for debugging
    print(f"Projects: {project_list}")
    return project_list

def get_project_by_id(project_id):
    project = mongo.db.projects.find_one({"_id": project_id})
    if project:
        project['_id'] = str(project['_id'])  # Convert ObjectId to string
    return project

def update_project(project_id, update_data):
    mongo.db.projects.update_one({"_id": project_id}, {"$set": update_data})

def delete_project(project_id):
    mongo.db.projects.delete_one({"_id": project_id})
