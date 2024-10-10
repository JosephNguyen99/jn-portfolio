# jn-portfolio/backend/app/models/work_experiences.py
from app import db
from app.models.experience_skills import experience_skills
class WorkExperience(db.Model):
    __tablename__ = 'experiences'
    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    start_date = db.Column(db.String(100), nullable=False)
    end_date = db.Column(db.String(100), nullable=False)
    # # Many-to-many relationship with skills
    # skills = db.relationship('Skill', secondary='experience_skills', backref=db.backref('work_experiences', lazy='dynamic'))

    # Many-to-many relationship with skills
    skills = db.relationship('Skill', secondary=experience_skills, backref=db.backref('experiences', lazy='dynamic'))

    def as_dict(self):
        return {
            'id': self.id,
            'job_title': self.job_title,
            'company': self.company,
            'start_date': str(self.start_date),
            'end_date': str(self.end_date) if self.end_date else 'Present',
            'description': self.description,
            'skills': [skill.name for skill in self.skills]  # Include related skills
        }

