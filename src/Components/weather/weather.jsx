import React, { useEffect, useState } from "react";

import RainSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-7.svg";
import CloudsSvg from "../../assets/amcharts_weather_icons_1.0.0/static/cloudy.svg";
import DrizzleSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-6.svg";
import ClearSvg from "../../assets/amcharts_weather_icons_1.0.0/static/day.svg";

const Weather = ({
  weatherData,
  inputQuery,
  query,
  handleKeyDown,
  handleSubmit,
  error,
  setQuery,
  setError,
}) => {
  console.log(weatherData);

  useEffect(() => {
    if (error && error.includes("No matching city found")) {
      const timeoutId = setTimeout(() => {
        setQuery("");
        setError(null);
      }, 1500);
      return () => clearTimeout(timeoutId);
    }
  }, [error, setError, setQuery]);

  if (error) {
    return (
      <>
        <div className="absolute bg-gray-900 p-5 text-red-700">
          Error: {error}
        </div>
      </>
    );
  }

  if (!weatherData) {
    return (
      <div
        style={{
          position: "absolute",
          left: "20px",
          color: "red",
          backgroundColor: "black",
          width: "650px",
          zIndex: "100",
        }}
      >
        Loading...
      </div>
    );
  }

  let backgroundImage;
  switch (weatherData.weather[0].main) {
    case "Rain":
      backgroundImage = `url(${RainSvg})`;
      break;
    case "Drizzle":
      backgroundImage = `url(${DrizzleSvg})`;
    case "Clouds":
      backgroundImage = `url(${CloudsSvg})`;
      break;
    case "Clear":
      backgroundImage = `url(${ClearSvg})`;
      break;
    default:
      backgroundImage = null;
  }

  // Convert temperature from Kelvin to Celsius
  const temperatureCelsius = weatherData.main.temp - 273.15;

  console.log(weatherData);

  return (
    <>
      <div className="bg-gray-700 xl:max-w-sm m-auto sm:p-2 shadow-xl border-0 border-gray-900 border-solid overflow-auto col-start-1 col-end-2 border-2 ">
        <div className="weather-content grid grid-rows-2 grid-auto-rows-min gap-8">
          <div className="heading-and-input grid-start-1 flex flex-col justify-between gap-2 self-start gap-3">
            <p className="text-3xl text-yellow-300 mb-3 flex">World Weather</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                value={query}
                onChange={inputQuery}
                placeholder="Enter city"
                onKeyDown={handleKeyDown}
              />
              <button
                type="sumbit"
                className="bg-blue-500 p-2 rounded-lg text-gray-100 hover:bg-blue-700"
              >
                Go
              </button>
            </form>
          </div>

          <div>
            {weatherData && (
              <>
                <div className="grid-start-2 self-center">
                  <p className="city-and-country align-center flex text-lg text-gray-100 pl-2">
                    {weatherData.name},{weatherData.sys.country}  {" "}
                  </p>

                  <div className="weather-image-and-temperature flex justify-between flex-row text-yellow-200 items-center overflow-none">
                    <div className="p-1 justify-between align-top text-gray-100 flex flex-col items-center">
                      <div
                        className="relative w-16 h-16 bg-cover"
                        style={{ backgroundImage }}
                      ></div>
                      <p>{weatherData.weather[0].main}</p>
                    </div>
                    <span className="text-4xl text-white">
                      {temperatureCelsius.toFixed()}°C
                    </span>

                    <div></div>
                  </div>
                </div>
              </>
            )}

            {error && <p>Error: {error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
