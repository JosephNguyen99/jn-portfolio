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
