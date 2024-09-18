# Python PayPal-like App


This Python project is a basic web application simulating a money transfer system like Paypal, built with the Flask framework.

**Features:**

- Simulates transferring money between users.
- Displays the current account balance.
- Allows users to enter a transfer amount.
- Provides a popup confirmation upon successful transfer.

**Requirements:**

- Python 3.x
- Flask
- Werkzeug

**Installation:**

1. Clone this repository.
2. Create a virtual environment (recommended).
3. Install the required dependencies: `pip install -r requirements.txt`
4. Run the application: `python app.py`

**Usage:**

1. Access the app in your web browser (usually `http://localhost:5000/`).
2. Enter an initial balance in the prompt when the app launches.
3. Click the "Send" button to initiate a transfer.
4. Enter the transfer amount and recipient's username.
5. Click the "Transfer" button.
6. Upon successful transfer, a confirmation popup will appear.

**Folder Structure**

``` Structure
Please use same structure for the folder formation

project_name/

  ├── README.md
  
  ├── app.py           # Main Flask application file
  
  ├── requirements.txt # File listing project dependencies
  
  ├── static/
  
  │     ├── css/
  
  │     │   └── style.css   # CSS styles for the web app

  │     │   └── style1.css   # CSS styles for the web app
  
  │     ├── img/
  
  │     │   └── PayPal-logo.png (Optional: PayPal logo image)
  
  │     └── js/
  
  │         └── script.js    # JavaScript code for the main page
  
  |         └── script1.js    # JavaScript code for the popup page
  
  └── templates/
  
      ├── index.html    # HTML template for the main page
      
      └── popup.html     # HTML template for the confirmation popup
```


**Customization:**

- You can customize the CSS styles in `static/css/style.css` to modify the app's appearance.
- You can enhance the functionality by adding features like user authentication, transaction history, and error handling.

**Credits:**

- This project is for educational purposes only.
- (Optional: Acknowledge any external resources used)

**License:**

- Consider choosing a permissive open-source license like MIT or Apache 2.0 (add a LICENSE file with the chosen license text).

**Contributing:**

- If you wish to contribute to this project, please create pull requests with clear explanations of your changes.

**Enjoy building and exploring Flask applications!**
