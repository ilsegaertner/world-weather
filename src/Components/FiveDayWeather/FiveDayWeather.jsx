import React from "react";
import { useState, useEffect } from "react";
import RainSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-6.svg";
import CloudsSvg from "../../assets/amcharts_weather_icons_1.0.0/static/cloudy.svg";
import ClearSvg from "../../assets/amcharts_weather_icons_1.0.0/static/day.svg";

const FiveDayWeather = ({ lat, lon, query, weatherData }) => {
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

  console.log(fiveDayWeather);

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
      // year: "numeric",
      // month: "short",
      // day: "numeric",
      // hour: "numeric",
      // minute: "2-digit",
      // second: "2-digit",
      // timeZoneName: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

  let backgroundImage;
  if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
    switch (weatherData.weather[0].main) {
      case "Rain":
        backgroundImage = `url(${RainSvg})`;
        break;
      case "Clouds":
        backgroundImage = `url(${CloudsSvg})`;
        break;
      case "Clear":
        backgroundImage = `url(${ClearSvg})`;
        break;
      default:
        backgroundImage = null;
    }
  } else {
    backgroundImage = null;
  }

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
        <div className="bg-gray-600 xl:max-w-sm m-auto rounded-2xl p-10 shadow-xl border-blue-200 border-2 overflow-auto">
          <p className="flex my-8 text-xl text-white">Five-day forecast </p>
          <p className="flex my-8 text-xl text-yellow-300">{query}</p>
          <hr className="pb-3" />

          <div className="flex ">
            {threeOClockValues.map((item, index) => (
              <p key={index}>
                <div className="flex flex-col text-blue-100 pl-0 px-4 items-start">
                  {formatDateTime(item.dt_txt)}{" "}
                  <span className="text-md text-white">
                    {item.main.temp.toFixed()}°C
                  </span>
                  <div
                    className="relative w-10 h-10 bg-cover"
                    style={{ backgroundImage }}
                  ></div>
                </div>
              </p>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <p>No weather data available</p>;
  }
};

export default FiveDayWeather;
