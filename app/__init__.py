from flask import session
from flask import request, render_template, Flask, redirect
import html
app = Flask(__name__)
debug = True


@app.route("/", methods=["GET","POST"])
def home():
	return render_template("Login.html")

app.run()
