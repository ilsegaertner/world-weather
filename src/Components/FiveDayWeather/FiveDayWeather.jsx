import React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import RainSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-7.svg";
import CloudsSvg from "../../assets/amcharts_weather_icons_1.0.0/static/cloudy.svg";
import ClearSvg from "../../assets/amcharts_weather_icons_1.0.0/static/day.svg";

const FiveDayWeather = ({ lat, lon, city }) => {
  const [fiveDayWeather, setFiveDayWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const [threeOClockValues, setThreeOClockValues] = useState([]);

  const fetchFiveDayWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=4430e9e41106a5deb2aba2b74568af5e`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setFiveDayWeather(data);
      // filterThreeDayOClockValues(data.list);
      // console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [lat, lon]);

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchFiveDayWeather();
    }
  }, [lat, lon, fetchFiveDayWeather]);

  const threeOClockValues = useMemo(() => {
    if (!fiveDayWeather) return [];
    return fiveDayWeather.list.filter((item) =>
      item.dt_txt.includes("15:00:00")
    );
  }, [fiveDayWeather]);

  // const filterThreeDayOClockValues = (list) => {
  //   const filteredValues = list.filter((item) =>
  //     item.dt_txt.includes("15:00:00")
  //   );
  //   setThreeOClockValues(filteredValues);
  // };

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      weekday: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

  // const weatherCases = threeOClockValues.map((item) => item.weather[0].main);

  // console.log(weatherCases);

  const backgroundImages = useMemo(() => {
    return threeOClockValues.map((item) => {
      switch (item.weather[0].main) {
        case "Rain":
          return `url(${RainSvg})`;

        case "Clouds":
          return `url(${CloudsSvg})`;

        case "Clear":
          return `url(${ClearSvg})`;

        default:
          return null;
      }
    });
  }, [threeOClockValues]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p> Error: {error}</p>;
  }

  if (!lat || !lon) {
    return <p>Latitude and longitude are required.</p>;
  }

  console.log(threeOClockValues);

  if (threeOClockValues.length > 0) {
    return (
      <>
        <div className="col-start-4 col-end-6 bg-gray-600 xl:max-w-sm m-auto sm:p-2 shadow-xl border-gray-900  overflow-auto grid grid-auto-rows-min gap-16 border-2">
          <p className="flex text-xl text-gray-100 row-start-1 self-center">
            Five-day forecast{" "}
          </p>
          <p className="px-1 flex text-xl text-black row-start-2 self-center rounded-xl">
            {" "}
            {city}
          </p>
          {/* <hr className="pb-3" /> */}

          <div className="flex row-start-3 self-center">
            {threeOClockValues.map((item, index) => (
              // <p key={index}>
              <div
                key={index}
                className="flex flex-col text-blue-100 pl-0 px-4 items-start"
              >
                {formatDateTime(item.dt_txt)}{" "}
                <span className="text-md text-gray-100">
                  {item.main.temp.toFixed()}°C
                </span>
                <div
                  className="relative w-10 h-10 bg-cover"
                  style={{ backgroundImage: backgroundImages[index] }}
                ></div>
              </div>
              // </p>
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
