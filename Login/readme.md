# Login Form Using HTML, CSS, and JavaScript

This project is a simple login form created using HTML, CSS, and JavaScript. The form includes input fields for the user's name, email, phone number, and password. It also includes basic validation to ensure that all fields are filled in correctly before submission.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Code Explanation](#code-explanation)
- [Customization](#customization)
- [License](#license)

## Installation

No special installation is required. Just download the project files and open the `index.html` file in a web browser.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your name, email address, phone number, and password in the respective fields.
3. Click the `Submit` button to validate and submit the form.

## Files

- `index.html`: Contains the HTML structure of the login form.
- `style.css`: Contains the CSS styling for the login form.
- `1.js`: Contains the JavaScript code for form validation.

## Code Explanation

### HTML (`index.html`)

The HTML structure includes:
- A form with input fields for name, email, phone number, and password.
- Inline JavaScript in the `onclick` attribute of the submit button to handle form validation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <form id="login">
          <h3>Login Here</h3>
            <input placeholder="Enter your name" type="text" id="name">
            <input placeholder="Enter your Email Address" type="text" id="email">
            <input placeholder="Enter your Phone Number" type="text" id="number">
            <p id="num"></p>
            <input placeholder="Enter your Password" type="text" id="Password">
            <p id="pass"></p>
            <input type="submit" value="Submit" onclick="validDetails(); return false">
        </form>
        <h1 id="display"></h1>
    </div>
    <script src="1.js"></script>
</body>
</html>

```css


@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 14px;
  line-height: 1.6;
  background: url('https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

p {
  color: red;
  font-weight: 500;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 20px;
  position: relative;
  padding: 20px;
}

#login {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

#login h3 {
  display: block;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

#login h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  text-align: center;
}

#login input[type="text"],
#login input[type="password"] {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 15px;
  padding: 15px;
  font: 400 14px/16px "Roboto", Helvetica, Arial, sans-serif;
  border-radius: 5px;
  transition: border 0.3s ease;
}

#login input[type="text"]:focus,
#login input[type="password"]:focus {
  border-color: #3498db;
}

#login input[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #3498db;
  color: #fff;
  margin: 10px 0;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
}

#login input[type="submit"]:hover {
  background: #2980b9;
  transform: scale(1.05);
}

#login input {
  outline: 0;
}

function validDetails(){
    let name  = document.querySelector('#name').value;
    let email  = document.querySelector('#email').value;
    let number  = document.querySelector('#number').value;
    let password  = document.querySelector('#Password').value;

    if(name == null || name == ""){
        alert("Please Enter your name.");
    }

    if(email == null || email == ""){
        alert("Please enter your valid email or double check it.");
    } else {
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let isEmail = reg.test(email);

        if(!isEmail){
            alert("Please enter your email in valid format or double check it.");
        }
    }

    if(number == null || number == ""){
        document.querySelector("#num").innerHTML = "Enter your valid mobile number.";
    } else {
        document.querySelector("#num").innerHTML = "";
    }

    if(password == null || password == ""){
        document.querySelector('#pass').innerHTML = "Enter your correct password.";
    } else {
        document.querySelector("#pass").innerHTML = "";
    }
}
