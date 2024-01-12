from bcrypt import checkpw, gensalt, hashpw
from flask import Flask, request
from flask_cors import CORS
import sqlite3


  
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/login", methods=["POST"])

def login():
    con = sqlite3.connect('G:\data.db')
    cu = con.cursor()
    email = request.json["username"]
    password = request.json["password"]

    emailQuery = """Select Password From UserData Where Email = ?"""
    cu.execute(emailQuery, (email,))
    con.commit()
    response = cu.fetchall()
    if len(response) == 0:
        return "Invalid login.", 200
    storedPassword = response[0][0]
    print("Stored PW: " + storedPassword)
    if password == storedPassword:
        return "Valid login.", 200
    
    else: return "Invalid login.", 200

if __name__ == "__main__":
    app.run()


