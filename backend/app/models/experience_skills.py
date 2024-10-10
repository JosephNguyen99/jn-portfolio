# jn-portfolio/backend/app/models/work_experiences.py
from app import db

"""
In summary:

The ExperienceSkills model defines the relationship schema between the WorkExperience and Skill models by holding references to the IDs from both tables.
It doesn't directly return data or have a return method, as you'll retrieve the related data via the primary models (e.g., WorkExperience or Skill) by using the relationship fields you've defined (skills in WorkExperience and work_experiences in Skill).
The many-to-many relationship is managed through this junction table, but you'll typically work with the data through the primary models (WorkExperience and Skill) when performing queries or returning data via the API.

"""
# class ExperienceSkills(db.Model):
#     __tablename__ = 'experience_skills'
#     experience_id = db.Column(db.Integer, db.ForeignKey('experiences.id'), primary_key=True)
#     skill_id = db.Column(db.Integer, db.ForeignKey('skills.id'), primary_key=True)

    
# Define the experience_skills association table
experience_skills = db.Table(
    'experience_skills',
    db.Column('experience_id', db.Integer, db.ForeignKey('experiences.id'), primary_key=True),
    db.Column('skill_id', db.Integer, db.ForeignKey('skills.id'), primary_key=True)
)