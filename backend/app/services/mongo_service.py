# Use services to encapsulate complex business logic or database interactions. 
# This can make code a lot more modular

from app import mongo

def save_contact_form(data):
    mongo.db.contacts.insert_one(data)