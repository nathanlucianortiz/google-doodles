# Google Doodle Gallery

## Description

This is a React application that hits the API endpoint "https://google-doodles.herokuapp.com/doodles" and returns Google's special days.

Upon clicking on either a past or present calendar date, the application will send the year and month as parameters to the endpoint. For example, "https://google-doodles.herokuapp.com/doodles/2022/6" will return all the special days for June 2022.

The results are then mapped, matching the run_date_array property with the specific
date that is picked. The matches are then pushed to a new array that is displayed on the righthand side of the calendar.

In-progess work includes:
*Styling and CSS
*Replacing Previous and Next methods with a dropdown select.
\*Fixing the issue of displayed day taking too long load.

### Installation and Run

\*Installation:

1. Open your terminal and type $ git clone https://github.com/nathanlucianortiz/google-doodles.git
2. Cd into the new folder
3. $ npm install

\*Run:
$ npm start
