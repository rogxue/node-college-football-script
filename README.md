# College Football Scraper

This is a college football script that scrapes the NCAA website and displays the live score, the final score, or the time of the game for a team. 

It was originally written and deployed on Heroku as part of a GroupMe bot. That bot is pretty messy and somewhat buggy at the moment so I decided to clean up and post this on its own as it has served me well for many college football seasons.

To run it, make sure Node is installed. Then run `npm install` in command prompt to install the necessary dependencies. Then run `npm start` to run my sample test file `index.js`. Simply input the name of an FBS school and its results from the current week will be displayed. The `--active` command can also be used to display all ongoing games at the moment.