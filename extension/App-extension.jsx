import React, { useEffect, useState } from "react";
import { API_KEY } from "../src/config";

const AppExtension = () => {
  const [weatherData, setWeatherData] = useState();
  const [query, setQuery] = useState("Paris");
  const [error, setError] = useState(null);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

  const limit = 1;

  const fetchCoords = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${API_KEY}
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
    fetchCoords(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCoords(query);
  };

  const inputQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
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
      {weatherData && (
        <div>
          <p>
            City:{weatherData.name}, Country:{weatherData.country}
          </p>
          <p>Lat:{weatherData.lat}</p>

          <p>Lon:{weatherData.lon}</p>
        </div>
      )}
    </>
  );
};

export default AppExtension;
