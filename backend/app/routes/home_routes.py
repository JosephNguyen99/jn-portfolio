# jn-portfolio/backend/app/routes/home_routes.py
from flask import jsonify, Blueprint
from app.models.about_me import About
from app.models.skills import Skill
from app.models.interests import Interest
from app.models.hobbies import Hobby
from app.models.work_experiences import WorkExperience

home_bp = Blueprint('home', __name__)

@home_bp.route('/api/home', methods=['GET'])
def home_page():
    # Fetch all required data from MySQL tables
    # Fetch the latest (highest id) 'About Me' entry
    about_me = About.query.order_by(About.id.desc()).first()
    # about_me = About.query.first()
    interests = Interest.query.all()
    skills = Skill.query.all()
    work_experiences = WorkExperience.query.all()
    hobbies = Hobby.query.all()

    # Convert the fetched data into dictionaries
    if about_me:
        about_me_data = about_me.as_dict()
    else:
        about_me_data = {"message": "About Me section not found"}
        
    interests_data = [interest.as_dict() for interest in interests]
    skills_data = [skill.as_dict() for skill in skills]
    work_experiences_data = [experience.as_dict() for experience in work_experiences]
    hobbies_data = [hobby.as_dict() for hobby in hobbies]

    # Return a single JSON object containing all the content for the home page
    return jsonify({
        'about_me': about_me_data,
        'skills': skills_data,
        'work_experiences': work_experiences_data,
        'interests': interests_data,
        'hobbies': hobbies_data
    }), 200 # Explicitly set status code to 200

# @main_bp.route('/api/skills', methods=['POST'])
# def add_skill():
#     data = request.get_json()
#     new_skill = Skill(name=data['name'])
#     db.session.add(new_skill)
#     db.session.commit()
#     return jsonify({"message": "Skill added successfully"}), 201


# # @home_bp.route('/api/home', methods=['GET'])
# def get_home_content():
#     # # Query all of the models per each category
#     # about_me_record = About.query.first()
#     # skills_records = Skill.query.all()
#     # interests_records = Interest.query.all()
#     # hobbies_records = Hobby.query.all()

#     # # Print the data to see if the queries return anything
#     # print("About Me:", about_me_record)
#     # print("Skills:", skills_records)
#     # print("Interests:", interests_records)
#     # print("Hobbies:", hobbies_records)

#     # about_me = about_me_record.as_dict() if about_me_record else {}
#     # skills = [skill.as_dict() for skill in skills_records]
#     # interests = [interest.as_dict() for interest in interests_records]
#     # hobbies = [hobby.as_dict() for hobby in hobbies_records]

#     # Query all of the models per each category
#     about_me = About.query.first().as_dict() if About.query.first() else {}
#     skills = [skill.as_dict() for skill in Skill.query.all()]
#     interests = [interest.as_dict() for interest in Interest.query.all()]
#     hobbies = [hobby.as_dict() for hobby in Hobby.query.all()]

#     # Return JSON response with the correct data attribute
#     return jsonify({
#         "about_me": about_me,
#         "skills": skills,
#         "interests": interests,
#         "hobbies": hobbies
#     })