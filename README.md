# Calculator

A simple calculator

HTML Structure :

    The index.html file contains the structure of the calculator and the information section. Here's a brief overview of the HTML structure:

    The document type is set to HTML5 using <!DOCTYPE html>.
    The page's character set and viewport settings are configured.
    The title of the page is set to "Simple calculator."

    The document is divided into several sections:

    Header: Contains the title "CALCULATOR" and brief information about calculators.

    Main Calculator Section: Contains the calculator interface, including input and buttons for digits and operations.

    Footer: Displays a "Thank You!" message and copyright information.

CSS Styles:

    The styles for the calculator interface are defined in the Calculator.css file. Key CSS classes and styles include:

    Styling for the calculator's main container, buttons, and input display.
    Centering the calculator on the page.
    Defining button styles, including their appearance and cursor behavior.
    Specific styling for the equal button (=) with a different background color.
    Centering text and styling the footer.

JavaScript Functionality :

    The calculator's functionality is implemented using JavaScript in the calculator.js file. Here's an overview of the JavaScript functionality:

    It initializes a variable string to store the user's input.
    Selects all elements with the class button and adds event listeners to them.
    When a button is clicked:
        If the button is '=', it evaluates the string as an expression and displays the result in the input field.
        If the button is 'AC', it clears the input and resets the string.
        If the button is 'DE', it deletes the last character from the string.
        For all other buttons, it appends the button's text to the string and updates the input display.
