# jn-portolio/backend/app/routes/project_routes.py
# Create a main_bp blueprint for API routes. This routes is handling Project model

from flask import Blueprint, jsonify
from app.models.project import Project
from app import db

project_bp = Blueprint('project', __name__)

@project_bp.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()

    """
    # Another implementation instead of list comp is the following:
    project_list = []
    for project in projects:
      project_list.append(project.as_dict())  # returns each project in the dict contents
    return jsonify(project_list)
    """
    return jsonify([project.as_dict() for project in projects]) # List comprehension return for each project dictionary data contents. 