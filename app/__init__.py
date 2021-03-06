from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission
from flask import session           #allow for session creation/maintenance
from flask import redirect
from flask import url_for
import urllib
import json
import random
from os import urandom
# from jokeapi import Jokes
import asyncio
import db
import os
import sqlite3   #enable control of an sqlite database
import time
import csv
from flask import jsonify
from sqlite3.dbapi2 import IntegrityError
app = Flask(__name__)
app.secret_key = os.urandom(32)
db.create_tables()

@app.route('/', methods=['GET', 'POST'])
def display_login():
    db.create_tables()
    """Initial page, redirects user to their homepage if they are logged in, to the login page if they are not"""
    if(session.get("user_id") == None):
        return redirect("/login")
    else:
        user_id = session.get("user_id")
        w = db.get_scores(user_id).get('w')
        n = db.get_scores(user_id)["n"]
        y = db.get_scores(user_id)["y"]
        return render_template(
            'home.html', user_id=user_id, w=w, n = n, y = y
        )
@app.route("/login", methods=["GET","POST"])
def login():
        if(session.get("user_id")):
            return redirect("/")
        if(request.method == "POST"):
            username = request.form.get("username")
            password = request.form.get("password")
            user_id = db.authenticate(username, password) #Checks login against database info -- see authenticate in database.py
            error = db.error_handling(username, password)
            if(error == ""):
                session["user_id"] = user_id #Cookie based authentication (user is identified by his client id)

                return redirect("/")
            return render_template('login.html', error_message = error)
        return render_template('login.html')


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/login")

@app.route("/wordle", methods=["GET","POST"])
def open_wordle():
    if(request.method == 'POST'):
        print(request.form.get("js_data"))
        if(request.form.get("js_data") == "correct"):
            db.inc_wordle(session["user_id"])
        if(request.form.get("js_data") == "incorrect"):
            db.set_wordle(session["user_id"])
        return render_template("wordle.html")
    return render_template("wordle.html")

@app.route("/about", methods=["GET","POST"])
def open_about():
    return render_template("about.html")

@app.route("/me", methods=["GET","POST"])
def open_profile():
    return render_template("me.html")

@app.route("/nerdle", methods=["GET","POST"])
def open_nerdle():
    if(request.method == 'POST'):
        print(request.form.get("js_data"))
        if(request.form.get("js_data") == "correct"):
            db.inc_nerdle(session["user_id"])
        if(request.form.get("js_data") == "incorrect"):
            db.set_nerdle(session["user_id"])
        return render_template("wordle.html")
    return render_template("nerdle.html")

@app.route("/yordle", methods=["GET","POST"])
def open_yordle():
    if(request.method == 'POST'):
        print(request.form.get("js_data"))
        if(request.form.get("js_data") == "correct"):
            db.inc_yordle(session["user_id"])
        if(request.form.get("js_data") == "incorrect"):
            db.set_yordle(session["user_id"])
        return render_template("wordle.html")
    return render_template("yordle.html")

@app.route("/home", methods=["GET","POST"])
def open_home():
    user_id = session.get("user_id")
    w = db.get_scores(user_id).get('w')
    n = db.get_scores(user_id)["n"]
    y = db.get_scores(user_id)["y"]
    return render_template("home.html", w = w, n=n, y=y)


@app.route('/wordget')
def get_word():
    file = open('Words.txt')
    content = file.readlines()
    randominteger = random.randint(0,2300)
    words = content[randominteger]
    return jsonify(words)
@app.route('/wordsget')
def get_words():
    file = open('Wordz.txt')
    content = file.readlines()
    return jsonify(content)
@app.route('/champget')
def get_champ():
    data = list(csv.reader(open("Champs.csv")))
    return jsonify(data)
    
@app.route("/register", methods=["GET","POST"])
def register():
    if(request.method == "POST"):
        username = request.form.get('username')
        password = request.form.get('password')
        confirm = request.form.get('cpassword')
        error = ""
        if(str(password) != str(confirm) or password == '' or confirm == ''):
            print("password = " + password)
            print("confirm = "+ confirm)
            print(c)
            error = "Passwords Do Not Match or Are Blank, Please Try Again"
            return render_template('register.html',error_message = error)
        if(username == ''):
            print(x)
            error = "Username Can Not Be Blank"
            return render_template('register.html',error_message = error)
        elif(str(password) == str(confirm) and password != None):
            print("password" + password)
            try:
                session['user_id'] = db.create_user(username, password)
                return redirect("/")
            except IntegrityError:
                error = "that username is already taken"
                return render_template('register.html', error_message = error)
        else:
            print("register")
            return render_template('register.html')
    else:
        print("register2")
        return render_template('register.html')
if __name__ == '__main__':
    app.debug = True
    app.run()
