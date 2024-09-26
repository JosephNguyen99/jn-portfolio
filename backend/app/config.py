# jn-portolio/backend/app/config.py

import os

# Set up configuration for SQLAlchemy (ORM w/ RDMS) and MongoDB (DBMS)
class Config:
    # SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'mysql+pymysql://root:06141999@localhost/db_name'   # added +pymysql after mysql since we added pymysql for import
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:06141999@localhost/portfolio_db'
    SQLACHEMY_TRACK_MODIFICATIONS = False
    MONGO_URI = os.environ.get('MONGO_URI') or 'mongodb://localhost:27017/your_mongo_db'