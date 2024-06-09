# Calculator Using JavaScript

This project is a simple calculator application created using HTML, CSS, and JavaScript. The calculator allows basic arithmetic operations such as addition, subtraction, multiplication, and division. The user interface includes buttons for numbers (0-9), arithmetic operators (+, -, *, /), a clear button to reset the display, and an equals button to compute the result of the entered expression.

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
2. Click on the number buttons (0-9) to enter numbers.
3. Use the operator buttons (+, -, *, /) to enter arithmetic operations.
4. Click the `=` button to evaluate the expression and display the result.
5. Use the `clear` button to reset the display and start a new calculation.

## Files

- `index.html`: Contains the HTML structure of the calculator.
- `style.css`: Contains the CSS styling for the calculator.

## Code Explanation

### HTML (`index.html`)

The HTML structure consists of:
- A paragraph element to display the calculator screen.
- Input buttons for numbers, operators, clear, and equals.
- Inline JavaScript in the `onclick` attributes to handle button clicks and perform actions.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>calc Using JS</title>
</head>

<body>
    <p id="display"></p>

    <div class="buttons">
        <input type="button" class="nums" value="1" onclick="document.getElementById('display').innerHTML +=1">
        <input type="button" class="nums" value="2" onclick="document.getElementById('display').innerHTML +=2">
        <input type="button" class="nums" value="3" onclick="document.getElementById('display').innerHTML +=3">
        <input type="button" class="symbol" value="+" onclick="document.getElementById('display').innerHTML +='+'">
        <br>
        <input type="button" class="nums" value="4" onclick="document.getElementById('display').innerHTML +=4">
        <input type="button" class="nums" value="5" onclick="document.getElementById('display').innerHTML +=5">
        <input type="button" class="nums" value="6" onclick="document.getElementById('display').innerHTML +=6">
        <input type="button" class="symbol" value="-" onclick="document.getElementById('display').innerHTML +='-'">
        <br>
        <input type="button" class="nums" value="7" onclick="document.getElementById('display').innerHTML +=7">
        <input type="button" class="nums" value="8" onclick="document.getElementById('display').innerHTML +=8">
        <input type="button" class="nums" value="9" onclick="document.getElementById('display').innerHTML +=9">
        <input type="button" class="symbol" value="*" onclick="document.getElementById('display').innerHTML +='*'">
        <br>
        <input type="button" class="symbol" value="clear" onclick="document.getElementById('display').innerHTML =''">
        <input type="button" class="nums" value="0" onclick="document.getElementById('display').innerHTML +='0'">
        <input type="button" class="symbol" value="=" onclick="document.getElementById('display').innerHTML =eval(document.getElementById('display').innerHTML)">
        <input type="button" class="symbol" value="/" onclick="document.getElementById('display').innerHTML +='/'">
    </div>

</body>

</html>
