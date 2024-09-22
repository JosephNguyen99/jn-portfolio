# jn-portfolio/backend/app/routes/home_routes.py
from flask import jsonify, Blueprint
from app.models.about_me import About
from app.models.skills import Skill
from app.models.interests import Interest
from app.models.hobbies import Hobby

home_bp = Blueprint('home', __name__)

@home_bp.route('/api/home', methods=['GET'])
def get_home_content():
    # Query all of the models per each category
    about_me = About.query.first().as_dict() if About.query.first() else {}
    skills = [skill.as_dict() for skill in Skill.query.all()]
    interests = [interest.as_dict() for interest in Interest.query.all()]
    hobbies = [hobby.as_dict() for hobby in Hobby.query.all()]

    return jsonify({
        "about_me": about_me,
        "skills": skills,
        "interests": interests,
        "hobbies": hobbies
    })
