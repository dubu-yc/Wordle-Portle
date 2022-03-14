from flask import session
from flask import request, render_template, Flask, redirect
import html
import db
import os
app = Flask(__name__)
app.secret_key = os.urandom(32)
db.create_tables()

@app.route('/', methods=['GET', 'POST'])
def display_login():
    """Initial page, redirects user to their homepage if they are logged in, to the login page if they are not"""
    if(session.get("user_id") == None):
        return redirect("/login")
    return render_template(
        'home.html', user_id=session.get("user_id")
    )
@app.route("/login", methods=["GET","POST"])
def login():
        if(session.get("user_id")):
            return redirect("/")
        if(request.method == "POST"):
            username = request.form.get("username")
            password = request.form.get("password")
            user_id = db.authenticate(username, password) #Checks login against database info -- see authenticate in database.py
            if(user_id):
                session["user_id"] = user_id #Cookie based authentication (user is identified by his client id)
                return redirect("/")
            else:
                return render_template("login.html")
        else:
            return render_template("login.html")

@app.route("/register", methods=["GET","POST"])
def register():
    if(request.method == "POST"):
        username = request.form.get('username')
        password = request.form.get('password')
        confirm = request.form.get('cpassword')
        if(str(password) != str(confirm) or password == '' or confirm == ''):
            print("password = " + password)
            print("confirm = "+ confirm)
            print(c)
            return render_template('register.html')
        if(username == ''):
            print(x)
            return render_template('register.html')
        elif(str(password) == str(confirm) and password != None):
            print("password" + password)
            session['user_id'] = db.create_user(username, password)
            return redirect("/")
        else:
            print("register")
            return render_template('register.html')
    else:
        print("register2")
        return render_template('register.html')
if __name__ == '__main__':
    app.debug = True
    app.run()