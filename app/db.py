import sqlite3
DB_FILE = "database.db"
db = sqlite3.connect(DB_FILE, check_same_thread=False)
c = db.cursor()
def create_tables():
    c = db.cursor()
    """Creates the tables in the database to store entries and users"""
    command = 'CREATE TABLE IF NOT EXISTS scores (user_id INTEGER, wordle_score INTEGER, nerdle_score INTEGER, yordle_score INTEGER)'
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
    c.execute(f'INSERT INTO scores (wordle_score,nerdle_score,yordle_score) VALUES (?,?,?);', (0,0,0))
    db.commit()
def get_scores(user_id):
    c = db.cursor()
    result = list(c.execute(f'SELECT wordle_score, nerdle_score, yordle_score from scores where user_id == ?', (user_id,)))
    return [{
        "w": wordle_score,
        "n": nerdle_score,
        "y": yordle_score,
    } for (wordle_score, nerdle_score, yordle_score) in result][0]
def inc_wordle(user_id):
    c = db.cursor()
    c.execute(f'UPDATE scores SET wordle_score = ? where user_id == ?', (get_scores(user_id)['w'] + 1, user_id))
    db.commit()
def inc_nerdle(user_id):
    c = db.cursor()
    c.execute(f'UPDATE scores SET nerdle_score = ? where user_id == ?', (get_scores(user_id)['n'] + 1, user_id))
    db.commit()
def inc_yordle(user_id):
    c = db.cursor()
    c.execute(f'UPDATE scores SET yordle_score = ? where user_id == ?', (get_scores(user_id)['y'] + 1, user_id))
    db.commit()

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