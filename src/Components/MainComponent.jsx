import { API_KEY } from "../config.js";

import FooterComponent from "./footer-component/footer";

import React, { useEffect, useState, Suspense } from "react";
import { Spinner } from "@radix-ui/themes";

const Weather = React.lazy(() => import("./weather/weather"));
const FiveCityForecast = React.lazy(() =>
  import("./five-cities-forecast/five-cities-forecast")
);
const MyMap = React.lazy(() => import("./MyMap/myMap"));
const FiveDayWeather = React.lazy(() =>
  import("./FiveDayWeather/FiveDayWeather")
);

const MainComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [uncachedWeatherData, setUncachedWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [city, setCity] = useState("Paris"); // state variable to store city value after input
  const [query, setQuery] = useState("Paris");
  const [error, setError] = useState(null);

  const limit = 1;

  const inputQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (query !== city) {
      await fetchCoords(query);
      setCity(query);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  // API call Geocoding
  const fetchCoords = async (cityName) => {
    try {
      if (!query) {
        // Don't make the request if the query is empty
        return;
      }

      // local Storage
      let latFromStorage, lonFromStorage;
      // Retrieve coordinates from local storage

      const storedCoords = localStorage.getItem(`weatherCoords_${cityName}`);
      if (storedCoords) {
        const { lat, lon } = JSON.parse(storedCoords);
        latFromStorage = lat;
        lonFromStorage = lon;
        // Update the state with coordinates from local storage
        setLat(lat);
        setLon(lon);
        console.log(lat, lon);
      }

      if (!latFromStorage || !lonFromStorage || query !== city) {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch the weather Data from the city name query"
          );
        }
        const data = await response.json();
        console.log(data);

        // Check if data array is empty
        if (data.length === 0) {
          throw new Error("No matching city found");
        }

        const { lat, lon } = data[0];
        setLat(lat);
        setLon(lon);

        localStorage.setItem(
          `weatherCoords_${cityName}`,
          JSON.stringify({ lat, lon })
        );
      }
    } catch (error) {
      setError(error.message);
    }
    console.log(lat);
    console.log(lon);
  };

  useEffect(() => {
    fetchCoords(city);
  }, [city]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchWeatherData = async (cityName, latitude, longitude) => {
    try {
      if (!latitude || !longitude) return;

      // Check if weather data exists in cache

      const cachedWeatherData = localStorage.getItem(`weatherData_${cityName}`);
      if (cachedWeatherData) {
        setWeatherData(JSON.parse(cachedWeatherData));
        return;
      }

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();

      setWeatherData(data);
      setUncachedWeatherData(data);

      localStorage.setItem(`weatherData_${cityName}`, JSON.stringify(data));
    } catch (error) {
      setError(error.message);
    }
  };

  // Log uncachedWeatherData when it changes
  useEffect(() => {
    if (uncachedWeatherData) {
      console.log("Uncached Weather Object:", uncachedWeatherData);
    }
  }, [uncachedWeatherData]);

  useEffect(() => {
    if (lat !== null && lon !== null && city !== null) {
      fetchWeatherData(city, lat, lon);
    }
  }, [city, lat, lon]); // eslint-disable-line react-hooks/exhaustive-deps

  const isDay = (uncachedWeatherData) => {
    if (uncachedWeatherData) {
      const currentTime = new Date(
        (uncachedWeatherData.dt + uncachedWeatherData.timezone) * 1000
      );
      const sunriseTime = new Date(
        (uncachedWeatherData.sys.sunrise + uncachedWeatherData.timezone) * 1000
      );
      const sunsetTime = new Date(
        (uncachedWeatherData.sys.sunset + uncachedWeatherData.timezone) * 1000
      );

      console.log(`Current Time in ${city}: ${currentTime}`);
      console.log(`Sunrise Time in ${city}: ${sunriseTime}`);
      console.log(`Sunset Time in ${city}: ${sunsetTime}`);

      return currentTime >= sunriseTime && currentTime < sunsetTime;
    }
  };

  const isDaytime = isDay(uncachedWeatherData);

  let weatherGradient;
  if (
    uncachedWeatherData &&
    uncachedWeatherData.weather &&
    uncachedWeatherData.weather[0]
  ) {
    const mainWeather = uncachedWeatherData.weather[0].main;

    if (isDaytime) {
      // Daytime gradients
      switch (mainWeather) {
        case "Rain":
        case "Drizzle":
        case "Clouds":
          weatherGradient =
            "bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"; // Lighter shades
          break;
        case "Clear":
          weatherGradient =
            "bg-gradient-to-r from-yellow-200 via-yellow-400 to-blue-500"; // Bright and colorful
          break;
        default:
          weatherGradient = "bg-gradient-to-r from-gray-200 to-gray-400";
      }
    } else {
      // Nighttime gradients
      switch (mainWeather) {
        case "Rain":
        case "Drizzle":
        case "Clouds":
          weatherGradient =
            "bg-gradient-to-r from-gray-700 via-gray-900 to-black"; // Darker shades
          break;
        case "Clear":
          weatherGradient =
            "bg-gradient-to-r from-blue-900 via-blue-700 to-black"; // Dark blue tones
          break;
        default:
          weatherGradient = "bg-gradient-to-r from-gray-400 to-gray-600";
      }
    }
  }

  return (
    <>
      <div className="sm:leading-9  m-auto text-gray-100 h-screen">
        <Suspense fallback={<Spinner size="2">Loading...</Spinner>}>
          <div
            className={`flex-col sm:flex-row justify-center pt-16  p-8 flex flex-wrap shadow-xl border-gray-600 gap-8  ${weatherGradient}`}
          >
            <Weather
              handleSubmit={handleSubmit}
              handleKeyDown={handleKeyDown}
              inputQuery={inputQuery}
              weatherData={weatherData}
              uncachedWeatherData={uncachedWeatherData}
              query={query}
              setQuery={setQuery}
              setError={setError}
              error={error}
              city={city}
            />
            <FiveDayWeather
              lat={lat}
              lon={lon}
              city={city}
              weatherData={weatherData}
            />
            <FiveCityForecast query={query} />
          </div>
          <div className="flex flex-col justify-center">
            <MyMap city={city} />
          </div>
        </Suspense>
      </div>

      <FooterComponent />
    </>
  );
};

export default MainComponent;
