# jn-portolio/backend/app/models/project.py

"""
Below is a MongoDB or NoSQL approach
"""

from app import mongo

def add_project_to_mongo(data):
    mongo.db.projects.insert_one(data)

def get_projects_from_mongo():
    return list(mongo.db.projects.find({}))


"""
Below is a SQL Schema
"""
# from app import db

# # Define Project model for MySQL/Postgres DB. Further review and edits depending on id fields.
# # Something like github_link is pending work since we don't have much GitHub repos accessible for the public
# class Project(db.Model):
#     __tablename__ = 'projects'
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(150), nullable=False)
#     description = db.Column(db.Text, nullable=False)
#     github_link = db.Column(db.String(250), nullable=False)

#     def as_dict(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "description": self.description,
#             "github_link": self.github_link
#         }