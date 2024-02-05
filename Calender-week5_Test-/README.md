# Interactive Calendar README

## Task Description
Create an interactive calendar with the following functionalities:
1. The current date is highlighted in green by default.
2. Change the month to reset the calendar (year remains the same).
3. Change the year to reset the calendar (default month is the current month).
4. Enter a specific day of the month, and that day should be highlighted.

## Implementation Details

### HTML
- HTML provides the structure of the calendar, including a dropdown for selecting the month, an input field for entering the year, and a button for resetting the calendar.
- A table is used to display the calendar with the days of the week as headers and the days of the month in the body.
- A text input and a button are added to allow users to enter a specific day of the month.

### CSS
- CSS is used for styling the calendar, including fonts, text alignment, and background colors for highlighting.

### JavaScript
- JavaScript is used to add interactivity to the calendar.
- The `resetCalendar` function handles the logic for resetting and displaying the calendar based on the selected month and year.
- The `highlightCustomDay` function allows users to enter a specific day of the month and highlights it in the calendar.
- When a day is selected in the calendar or entered in the text input, the `highlight-selected` class is added to the corresponding table cell to highlight it.
- Invalid inputs trigger alert messages to guide the user.

## Usage
- Open the HTML file in a web browser.
- Select a month from the dropdown, enter a year in the input field, and click the "Reset" button to display the calendar.
- Use the text input and "Enter" button to enter and highlight a specific day of the month (1-31).

