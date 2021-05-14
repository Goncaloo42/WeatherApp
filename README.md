# A simple weather application

In this repo you can find a simple React.js application.

The WeatherTeller is a  weather application to present Current and Forecast Weather for the next 7 days.\
The weather is automatically fetched for the user device coordinates – if the user accepts the prompt so the browser gets the coordinates – when he enters the page.\
After that, the user can enter cities to the list and check the weather there.

In the weather-teller folder you can find the application.

**React.js and Docker**

The application was developed using the React.js framework - https://reactjs.org/docs/getting-started.html - and React Hooks - https://reactjs.org/docs/hooks-intro.html

This application is deployed utilizing a Docker container - https://www.docker.com/

**Run commands**

To run the application you need to have Docker installed, and that's it! ;)

Open the terminal, cd (change directory) to the path of the application folder “weather-teller”\
Run the command ***docker-compose up***.\
The app will start running, when it finishes the build open a browser on ***http://localhost:3001/***. \
To stop the application, simply hit ***CTRL + C*** or run command ***docker-compose stop***.\
