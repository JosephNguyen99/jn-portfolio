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



"""
Previous SQL Schema
"""
# Create a main_bp blueprint for API routes. This routes is handling Project model

# from flask import Blueprint, jsonify
# from app.models.project import Project
# from app import db

# project_bp = Blueprint('project', __name__)

# @project_bp.route('/api/projects', methods=['GET'])
# def get_projects():
#     projects = Project.query.all()

#     """
#     # Another implementation instead of list comp is the following:
#     project_list = []
#     for project in projects:
#       project_list.append(project.as_dict())  # returns each project in the dict contents
#     return jsonify(project_list)
#     """
#     return jsonify([project.as_dict() for project in projects]) # List comprehension return for each project dictionary data contents. 


# # Adding Data via API Routes to handle record insertion for both SQL and MongoDB
# # Route to insert data into Mongo
# @home_bp.route('/api/projects/add', methods=['POST'])
# def add_project():
#     data = request.get_json()
#     add_project_to_mongo(data)
#     return jsonify({"message": "Project added successfully!"}), 201