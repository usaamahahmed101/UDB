from flask import Flask,jsonify

class User:
    def signup_values(self):
        
        user = {
            "name" : "",
            "email" : "",
            "password": ""
        }
        return jsonify(user)