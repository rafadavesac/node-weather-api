# Weather App

A web application built with **Node.js**, **Express**, **EJS**, and **Axios** that allows users to search for the current weather of any city.

The application uses the **Open-Meteo APIs** to retrieve geographic coordinates and current weather information, displaying the results in a simple and user-friendly interface.

## Features

- Search the current weather by city name.
- Display current temperature.
- Show weather conditions using descriptive text and emojis.
- Automatically adjust the interface for day and night.
- Handle invalid city names with user-friendly error messages.

## Technologies

- Node.js
- Express.js
- Axios
- EJS
- HTML
- CSS
- Open-Meteo Geocoding API
- Open-Meteo Weather Forecast API

## Project Structure

```
weather-app/
│
├── public/
│   └── css/
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

Install the dependencies:

```bash
npm install
```

## Running the application

Start the server:

```bash
node index.js
```

or, if you have Nodemon installed:

```bash
nodemon index.js
```

Open your browser and visit:

```
http://localhost:3000
```

## How it works

1. The user enters a city name.
2. The application queries the Open-Meteo Geocoding API to obtain the city's coordinates.
3. The coordinates are used to request current weather data from the Open-Meteo Forecast API.
4. The weather information is rendered dynamically using EJS templates.

## APIs Used

- Open-Meteo Geocoding API
- Open-Meteo Forecast API

## Learning Outcomes

This project was developed to practice:

- Building server-side applications with Express.js
- Consuming REST APIs using Axios
- Working with asynchronous JavaScript (async/await)
- Handling user input through forms
- Server-side rendering with EJS
- Error handling in web applications

## Future Improvements

- 5-day weather forecast
- Weather icons from the API
- Wind speed and humidity information
- Temperature unit selection (°C/°F)
- Search history
