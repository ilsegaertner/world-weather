// import FiveDayWeather from "./FiveDayWeather/FiveDayWeather";
// import Weather from "./weather/weather";

import FooterComponent from "./footer-component/footer";
// import MyMap from "./MyMap/myMap";
// import FiveCityForecast from "./five-cities-forecast/five-cities-forecast";
import logo from "../assets/logos/logo.svg";
import React, { useEffect, useState, Suspense } from "react";

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
          `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=4430e9e41106a5deb2aba2b74568af5e`
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch the weather Data from the city name query"
          );
        }
        const data = await response.json();

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
    fetchCoords();
  }, []);

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
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4430e9e41106a5deb2aba2b74568af5e`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();

      setWeatherData(data);

      localStorage.setItem(`weatherData_${cityName}`, JSON.stringify(data));
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (lat !== null && lon !== null && city !== null) {
      fetchWeatherData(lat, lon, city);
    }
  }, [lat, lon, city]);

  return (
    <>
      <div className="md:px-24 lg:px-48 xl:px-64  xl:max-w-8xl bg-gray-900">
        <div className="flex items-center pt-3">
          <img
            src={logo}
            loading="lazy"
            className="ml-48 -mt-4 pr-6  text-xs text-white w-16 h-auto"
            alt="World Weather App logo"
          />
          <p className="text-3xl text-yellow-300 mb-3 inline  px-10 z-50">
            <span className="text-white">World</span> Weather
            <span className="text-blue-400">App</span>
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid grid-cols-8 grid-rows-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% shadow-xl border-gray-600 sm:p-2 ">
            <Weather
              handleSubmit={handleSubmit}
              handleKeyDown={handleKeyDown}
              inputQuery={inputQuery}
              weatherData={weatherData}
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
            <FiveCityForecast
              city={city}
              lon={lon}
              lat={lat}
              weatherData={weatherData}
            />
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
