from app import create_app, db
from app.models.about_me import About
from app.models.skills import Skill
from app.models.hobbies import Hobby
from app.models.interests import Interest

app = create_app()

with app.app_context():
    # Add About Me
    about_me = About(bio="I am a software engineer with a passion for full stack development, data aggregation, and analytics.", picture_url="https://example.com/my-picture.jpg")
    db.session.add(about_me)

    # Add Skills
    skill1 = Skill(name="Python")
    skill2 = Skill(name="Flask")
    db.session.add(skill1)
    db.session.add(skill2)

    # Add Hobbies
    hobby1 = Hobby(name="Pickleball")
    hobby2 = Hobby(name="Tennis")
    db.session.add(hobby1)
    db.session.add(hobby2)

    # Add Interests
    interest1 = Interest(name="Machine Learning")
    interest2 = Interest(name="Web Development")
    db.session.add(interest1)
    db.session.add(interest2)

    # Commit changes
    db.session.commit()
