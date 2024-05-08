import React from "react";
import { useState, useEffect } from "react";

const FiveDayWeather = ({ lat, lon, query }) => {
  const [fiveDayWeather, setFiveDayWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [threeOClockValues, setThreeOClockValues] = useState([]);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchFiveDayWeather();
    }
  }, [lat, lon]);

  // fetching hourly Weather data 5 days preview
  const fetchFiveDayWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=4430e9e41106a5deb2aba2b74568af5e`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setFiveDayWeather(data);
      filterThreeDayOClockValues(data.list);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterThreeDayOClockValues = (list) => {
    const filteredValues = list.filter((item) =>
      item.dt_txt.includes("15:00:00")
    );
    setThreeOClockValues(filteredValues);
  };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      // hour: "numeric",
      // minute: "2-digit",
      // second: "2-digit",
      // timeZoneName: "short",
    };
    return date.toLocaleDateString("en-US", options);
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

  if (threeOClockValues.length > 0) {
    return (
      <>
        <div>
          <p className="m-8 text-xl text-gray-800">Five-day forecast </p>
          <p className="m-8 text-xl text-gray-800">{query}</p>
          {/* <input
            type="number"
            className="p-3 border-gray-300 rounded-xl mb-5"
            placeholder="how many days?"
            min={1}
            max={35}
          ></input> */}

          {threeOClockValues.map((item, index) => (
            <p key={index}>
              <div className="flex text-gray-800">
                {formatDateTime(item.dt_txt)}{" "}
                <span className="text-xl pl-6 text-white">
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
