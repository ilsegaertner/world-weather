import React, { useEffect, useState } from "react";
import { API_KEY } from "../src/config";

const AppExtension = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [extractedWeatherData, setExtractedWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [finishedQuery, setFinishedQuery] = useState("");
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const limit = 1;

  const fetchCoords = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}
`
      );
      if (!response.ok) {
        throw new Error("couldn't retrive data from the Api");
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data);

      const { lat, lon } = data[0];
      setLat(lat);
      setLon(lon);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
    console.log("Latitude:", lat);
    console.log("Longitude:", lon);
  };

  useEffect(() => {
    if (finishedQuery) {
      fetchCoords(finishedQuery);
    }
  }, [finishedQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinishedQuery(query);
    // fetchCoords(finishedQuery);
  };

  const inputQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchWeatherData(lat, lon);
    }
  }, [lat, lon]);

  const fetchWeatherData = async (lat, lon) => {
    if (lat && lon) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(
            "Couldn't get the weather data on the latitude and longitude"
          );
        }
        const extractedData = await response.json();

        setExtractedWeatherData(extractedData);
        console.log("ExtractedWeatherDataObject:", extractedData);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
    }
  };

  let temperatureFahrenheit, temperatureCelsius, timestamp;
  if (extractedWeatherData) {
    timestamp = new Date(
      (extractedWeatherData.dt + extractedWeatherData.timezone) * 1000
    ).toLocaleTimeString();
    temperatureCelsius = extractedWeatherData.main.temp - 273.15;
    temperatureFahrenheit = extractedWeatherData.main.temp;
  }

  const toggleCelsiusFahrenheit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <>
      <div className="bg-gray-400 p-5 border-2">
        <form onSubmit={handleSubmit}>
          <label> Enter city</label>
          <input
            type="text"
            placeholder="enter city"
            value={query}
            onChange={inputQuery}
          />
          <p>{query}</p>
          <p></p>
          {weatherData && <p>{weatherData.name}</p>}
          <button type="submit">Get Weather</button>
        </form>
        {error && <p>Error: {error}</p>}
      </div>

      {weatherData && weatherData[0] && (
        <div className="bg-slate-400 p-5 border-2 ">
          <p>
            City: {weatherData[0].name}, {weatherData[0].country}
          </p>

          {/* <p>Lat: {weatherData[0].lat}</p>
          <p>Lon: {weatherData[0].lon}</p> */}
        </div>
      )}
      {extractedWeatherData && (
        <div className="bg-slate-400 p-5 border-2 ">
          <p>Local time: {timestamp}</p>
          {isCelsius ? (
            <p>
              {" "}
              Temp: <strong>{temperatureCelsius.toFixed()}°C</strong>
            </p>
          ) : (
            <p> Temp: {temperatureFahrenheit.toFixed()}°F</p>
          )}
          <button onClick={toggleCelsiusFahrenheit}>
            Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
          </button>

          <p> Weather: {extractedWeatherData.weather[0].description}</p>
        </div>
      )}
    </>
  );
};

export default AppExtension;
