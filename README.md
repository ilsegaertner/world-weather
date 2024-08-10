# Weather Application

## Overview

This Weather Application provides real-time weather data for cities around the world. The app displays current weather conditions, including temperature, weather icons, and more, for a user-specified city and five randomly selected cities. Users can search for a specific city, and the app will update the display with the latest weather information.

![Extension Screenshot](https://github.com/ilsegaertner/world-weather/blob/main/src/assets/screenshots/screenshot.png?raw=true)

## Features

- **City Search**: Users can enter the name of any city to retrieve its current weather information.
- **Five Random Cities**: The app displays the weather for five randomly selected cities from a predefined list.
- **Five-Day Weather Forecast**: The app provides a five-day weather forecast for the searched city, displaying the weather conditions each day.
- **Live Weather Icons**: Weather conditions are visually represented using icons sourced from the OpenWeatherMap API.
- **Responsive Design**: The application is designed to be responsive and works on various screen sizes.
- **Gradient Background**: The app dynamically renders the background color as a gradient based on the actual current weather data. For example, when it's sunny, the background displays a yellow-blue gradient, while a dark gray gradient is used for night and cloudy conditions.
- **Browser Extension**: A Chrome extension allows users to quickly view weather information and a map for any city directly from their browser.

## Technologies Used

- **React**: The frontend is built using React, a popular JavaScript library for building user interfaces.
- **OpenWeatherMap API**: The app uses the OpenWeatherMap API to fetch real-time weather data for the cities.
- **Framer Motion**: For smooth animations and transitions in the UI.
- **Radix UI**: A UI component library used for consistent and accessible design elements.
- **Leaflet**: For rendering interactive maps in the browser extension.

## Usage

- **Search for a City**: Enter a city name in the search bar and press enter or click the search button to fetch the latest weather information for that city.
- **View Five Random Cities**: The app automatically displays the weather for five random cities from a predefined list each time it is loaded or refreshed.
- **Five-Day Forecast**: View the 3:00 PM weather forecast for the next five days for the searched city.
- **Use the Browser Extension**: Install the extension to quickly check the weather and view a map for any city directly from your browser.

## API Reference

The application uses the following endpoints from the
<a href="https://openweathermap.org/api" target="_blank">OpenWeatherMap API</a>

- **Current Weather Data**: Fetches the current weather data for a city using its geographical coordinates.
  - Example: `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}`
- **Five-Day Forecast Data**: Fetches the five-day weather forecast for a city using its geographical coordinates.
  - Example: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&appid={API_KEY}`

## Acknowledgements

- <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> for providing the weather data API.
- <a href="https://radix-ui.com/" target="_blank">Radix UI</a> for the UI component library.
- <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a> for animations and transitions.
- <a href="https://leafletjs.com/" target="_blank">Leaflet</a> for map rendering in the browser extension.
