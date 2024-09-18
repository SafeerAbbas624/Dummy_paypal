from flask import Flask, render_template, request, jsonify, send_from_directory, redirect, url_for
import os
from werkzeug.serving import run_simple

# Set the initial balance
balance = float(input('What amount you want to set?'))
app = Flask(__name__)



# Serve static files from the 'static' directory
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

# Route for the main page
@app.route('/')
def index():
    return render_template('index.html', balance=balance)

# Route for the popup page
@app.route('/popup')
def popup():
    return render_template('popup.html')

# Route to handle the transfer request
@app.route('/transfer', methods=['POST'])
def transfer():
    global balance
    # Get the transfer amount from the request
    transfer_amount = float(request.json['amount'])

    # Update the balance
    balance -= transfer_amount

    # Return a JSON response indicating success
    return jsonify({'success': True, 'message': 'Transfer successful!'})
if __name__ == '__main__':
    run_simple(
        '0.0.0.0', #if you_want_to_access_from_other_devices else 'localhost',  # Bind to all interfaces (optional)
        5000,
        app,
        use_reloader=True,  # Enables automatic reloading on code changes
        use_debugger=True,  # Enables the debugger (optional)
        use_evalex=True,     # Enables interactive shell (optional)
    )
    app.run(debug=True)