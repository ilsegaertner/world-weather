import React, { useEffect, useState } from "react";
import MyMap from "../MyMap/myMap";
import RainSvg from "../../assets/160354.svg";
import CloudsSvg from "../../assets/clouds-cloud-svgrepo-com.svg";
import ClearSvg from "../../assets/Weather-clear.svg";

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
        className="bg-gray-700 xl:max-w-sm m-auto rounded-2xl p-10 shadow-xl"
        style={{ backgroundImage, backgroundRepeat: "repeat-y" }}
      >
        <p className="text-3xl text-yellow-300 mb-3"> World Weather </p>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
            value={query}
            onChange={inputQuery}
            placeholder="Enter city"
            onKeyDown={handleKeyDown}
          />
          <button
            type="sumbit"
            className="bg-green-900 p-2 rounded-lg text-white hover:bg-green-700"
          >
            Go
          </button>
        </form>
        {weatherData && (
          <>
            <div className="flex justify-start align-center flex-col text-yellow-200 overflow-auto p-10">
              <div className="">
                {" "}
                <p className="text-2xl align-center">
                  {weatherData.name}, {weatherData.sys.country}  {" "}
                  <span className="text-4xl text-white">
                    {temperatureCelsius.toFixed()}°C
                  </span>
                </p>
              </div>
              <div className="p-2 justify-start align-top text-white">
                {" "}
                <p>{weatherData.weather[0].main}</p>
              </div>
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
