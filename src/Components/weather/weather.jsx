import React, { useEffect, useState } from "react";
import MyMap from "../MyMap/myMap";
// import RainSvg from "../../assets/160354.svg";
// import CloudsSvg from "../../assets/clouds-cloud-svgrepo-com.svg";
// import ClearSvg from "../../assets/Weather-clear.svg";

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
}) => {
  const cityName = "Lamu";
  const limit = 1;

  console.log(weatherData);

  // useEffect for page reload when city not existing
  useEffect(() => {
    if (error && error.includes("No matching city found")) {
      const timeoutId = setTimeout(() => {
        window.location.reload();
      }, 700);

      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
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
      <div
        className="bg-gray-700 xl:max-w-sm m-auto rounded-2xl p-5 sm:p-10 shadow-xl my-0 border-8 border-gray-900 border-solid overflow-auto"
        // style={{ backgroundImage, backgroundRepeat: "repeat-y" }}
      >
        <p className="text-3xl text-yellow-300 mb-3 flex px-4">
          {" "}
          World Weather{" "}
        </p>
        <form className="px-4 flex gap-1" onSubmit={handleSubmit}>
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
        {weatherData && (
          <>
            <p className="align-center flex text-lg mt-12 px-4 text-gray-100">
              {weatherData.name}, {weatherData.sys.country}  {" "}
            </p>

            <div className="px-4 flex justify-between flex-row text-yellow-200 items-center overflow-none">
              <div className="p-1 justify-between align-top text-gray-100 flex flex-col items-center">
                {" "}
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
          </>
        )}

        {error && <p>Error: {error}</p>}
      </div>

      {/* <div className="flex flex-col justify-center max-w-sm">
        <MyMap city={query} />
      </div> */}
    </>
  );
};

export default Weather;
