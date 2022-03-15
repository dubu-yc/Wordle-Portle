import sqlite3
DB_FILE = "database.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False)
c = db.cursor()
def create_tables():
    c = db.cursor()
    """Creates the tables in the database to store entries and users"""
    command = 'CREATE TABLE IF NOT EXISTS scores (username TEXT NOT NULL UNIQUE, wordle_score INTEGER, nerdle_score INTEGER, yordle_score INTEGER)'
    c.execute(command)
    command = 'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL)'
    c.execute(command)

    db.commit() #save changes
create_tables()
def authenticate(username, password):
    create_tables()
    c = db.cursor()
    """Checks if the username and password match any login info in the users table"""
    result = list(c.execute(f'SELECT user_id from users where username == ? and password == ?', (username, password)))
    if(len(result) == 0): #length 0 means that password/username combination had no match
        return None
    print("it authenticated")
    return result[0][0] #user_id

def create_user(username, password):
    c = db.cursor()
    create_tables()
    """Adds a user with a username and password into the users table of the database"""
    c.execute(f'INSERT INTO users (username, password) VALUES (?, ?);', (username, password)) 
    c.execute(f'INSERT INTO scores (username, wordle_score,nerdle_score,yordle_score) VALUES (?,?,?,?);', (username,0,0,0))
    db.commit()
#list(c.execute(f'select user_id, wordle_score, nerde_score, yordle_score from scores where user_id == ? limit ? offset ?', (user_id, limit, offset)))
#For getting all of a users scores. Mya get rid of limit/offset, if not go from 0-200 or so

"""            try:
                session['user_id'] = database.create_user(username, password)
                return redirect("/")
            except IntegrityError:
                return render_template('register.html', error = True,
                error_message="That username is already taken. Please pick another one.")

            except Exception:
                return render_template('register.html', error = True,
                error_message="Sorry, something went wrong on our end. Please try registering later.")
"""

def error_handling(username, password):
    """
    Returns the correct error message when the user is logging in.
        Parameters:
            username (str): The username that the user entered
            password (str): The password that the user entered
        Returns:
            "User Not Found": Username does not match any entry in the database
            "Incorrect Password": Username is found in the database but password doesn't match
            "": Username and password matches
    """
    # avoid thread error
    db = sqlite3.connect(DB_FILE)
    c = db.cursor()

    # check if username exists in the db
    command = f"SELECT * FROM users WHERE (username = \"{username}\")"
    c.execute(command)
    data = c.fetchall()

    # no user exists
    if(data == []):
        return "User Not Found"

    # password is wrong
    elif(data[0][1] != password):
        return "Incorrect Password"

    # username and password is correct
    else:
        return ""