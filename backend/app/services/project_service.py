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
