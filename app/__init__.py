from flask import session
from flask import request, render_template, Flask, redirect
import html
import db
app = Flask(__name__)
debug = True


@app.route("/", methods=["GET","POST"])
def home():
    if('username' in request.form.keys() and request.form.get('username') != ""):
        username = request.form.get('username')
        password = request.form.get('password')
        db.authenticate(username,password)
    return render_template("login.html")

@app.route("/register", methods=["GET","POST"])
def register():
    if('username' in request.form.keys() and request.form.get('username') != ""):
        username = request.form.get('username')
        password = request.form.get('password')
        confirm = request.form.get('cpassword')
        if(password == cpassword and password != ''):
            db.create_user(username,password)	
    return render_template("register.html")
app.run()
