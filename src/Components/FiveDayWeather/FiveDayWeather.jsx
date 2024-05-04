import React from "react";
import { useState, useEffect } from "react";

const FiveDayWeather = ({ lat, lon }) => {
  const [fiveDayWeather, setFiveDayWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cnt, setCnt] = useState(5);

  const handleChange = (event) => {
    setCnt(event.target.value);
  };

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchFiveDayWeather();
    }
  }, [lat, lon, cnt]);

  // fetching hourly Weather data 5 days preview
  const fetchFiveDayWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=${cnt}&appid=4430e9e41106a5deb2aba2b74568af5e`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setFiveDayWeather(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p> Error: {error}</p>;
  }

  if (!lat || !lon) {
    return <p>Latitude and longitude are required.</p>;
  }

  if (fiveDayWeather && fiveDayWeather.list) {
    return (
      <>
        <div>
          <p className="m-8 text-xl">Five-day forecast</p>
          <input
            type="number"
            className="p-3 border-gray-300 rounded-xl mb-5"
            placeholder="how many days?"
            onChange={handleChange}
            min={1}
            max={35}
          ></input>

          {fiveDayWeather.list.map((item, index) => (
            <p key={index}>
              <div className="flex">
                {item.dt_txt}{" "}
                <span className="text-xl pl-6">
                  {item.main.temp.toFixed()} °C
                </span>
              </div>
            </p>
          ))}
        </div>
      </>
    );
  } else {
    return <p>No weather data available</p>;
  }
};

export default FiveDayWeather;
