def create_tables():
    """Creates the tables in the database to store entries and users"""
    c = db.cursor()
    command = 'CREATE TABLE IF NOT EXISTS scores (user_id INTEGER, wordle_score INTEGER, nerdle_score INTEGER, yordle_score INTEGER)'#use session["user_id"] when adding
    command = 'CREATE TABLE IF NOT EXISTS users (user_id INTEGER PRIMARY KEY, username TEXT NOT NULL UNIQUE, password TEXT NOT NULL)'
    c.execute(command)

    db.commit() #save changes
def authenticate(username, password):
    """Checks if the username and password match any login info in the users table"""
    c = db.cursor()
    result = list(c.execute(f'SELECT user_id from users where username == ? and password == ?', (username, password)))
    if(len(result) == 0): #length 0 means that password/username combination had no match
        return None
    return result[0][0] #user_id

def create_user(username, password):
    """Adds a user with a username and password into the users table of the database"""
    c = db.cursor()
    c.execute(f'INSERT INTO users (username, password) VALUES (?, ?);', (username, password)) 
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
