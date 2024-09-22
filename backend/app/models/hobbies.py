# jn-portfolio/backend/app/models/hobbies.py
from app import db

class Hobby(db.Model):
    __tablename__ = 'hobbies'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def as_dict(self):
        return {
            "name": self.name
        }
