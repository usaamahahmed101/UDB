from flask import Flask
from user.models import User
from app import app

@app.route('/user/signup/', methods = ['GET'])
def get_user():
    return User().signup_values()
