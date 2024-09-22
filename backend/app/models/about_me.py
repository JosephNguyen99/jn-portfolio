# jn-portfolio/backend/app/models/about_me.py
from app import db

class About(db.Model):
    __tablename__ = 'about'
    id = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.Text, nullable=False)
    picture_url = db.Column(db.String(250), nullable=True)

    def as_dict(self):
        return {
            "bio": self.bio,
            "picture_url": self.picture_url
        }
