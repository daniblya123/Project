from bcrypt import checkpw, gensalt, hashpw
from flask import Flask, request
from flask_cors import CORS
  
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/login", methods=["POST"])

def login():
    username = request.json["username"]
    providedPassword = request.json["password"].encode("utf-8")
    if username == "dani@gmail.com":
        return "Valid login.", 200
    
    else: return "Invalid login.", 200

if __name__ == "__main__":
    app.run()


