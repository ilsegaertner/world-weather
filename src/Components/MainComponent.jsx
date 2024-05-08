import React, { useEffect, useState } from "react";
import FiveDayWeather from "./FiveDayWeather/FiveDayWeather";
import Weather from "./weather/weather";
import FooterComponent from "./footer-component/footer";
import MyMap from "./MyMap/myMap";
import FiveCityForecast from "./five-cities-forecast/five-cities-forecast";

const MainComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [query, setQuery] = useState("Paris");
  const [error, setError] = useState(null);
  const [fiveCities, setFiveCities] = useState(null);
  const limit = 1;

  const inputQuery = (event) => {
    setQuery(event.target.value);
    console.log("Query:", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCoords();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchCoords();
    }
  };

  // API call Geocoding
  const fetchCoords = async () => {
    try {
      if (!query) {
        // Don't make the request if the query is empty
        return;
      }

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
    } catch (error) {
      setError(error.message);
    }
    console.log(lat);
    console.log(lon);
  };

  useEffect(() => {
    fetchCoords();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4430e9e41106a5deb2aba2b74568af5e`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCoords();
        if (lat !== null && lon !== null) {
          await fetchWeatherData();
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [lat, lon]);

  return (
    <>
      {/* <p className="text-xl bg-blue-300"> This is the main Weather Component</p> */}
      <div className="bg-blue-300 shadow-xl border-gray-600 p-10 flex items-center">
        <FiveDayWeather lat={lat} lon={lon} query={query} />
        <Weather
          handleSubmit={handleSubmit}
          handleKeyDown={handleKeyDown}
          inputQuery={inputQuery}
          weatherData={weatherData}
          error={error}
        />
        <FiveCityForecast city={query} lon={lon} lat={lat} />
      </div>
      <div className="flex flex-col justify-center w-screen bg-yellow-300">
        <MyMap city={query} />
      </div>
      <div className="bg-blue-900 w-screen h-screen">
        <FooterComponent />
      </div>
    </>
  );
};

export default MainComponent;
