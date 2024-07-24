import React, { useEffect } from "react";

import RainSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-7.svg";
import CloudsSvg from "../../assets/amcharts_weather_icons_1.0.0/static/cloudy.svg";
import DrizzleSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-6.svg";
import ClearSvg from "../../assets/amcharts_weather_icons_1.0.0/static/day.svg";
import { Flex, Text, Button, Box, Spinner } from "@radix-ui/themes";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import HeadingSecond from "../heading-second/heading-second";
import { motion } from "framer-motion";
import { Toaster } from "sonner";

const Weather = ({
  weatherData,
  uncachedWeatherData,
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
      }, 1300);
      return () => clearTimeout(timeoutId);
    }
  }, [error, setError, setQuery]);

  if (error) {
    return (
      <>
        <Flex
          gap="3"
          className="absolute bg-gray-900 p-5 text-red-700 rounded-md  "
        >
          <Text as="p" size="2" weight="medium">
            {" "}
            Error: {error}
          </Text>
          <Spinner size="2" />
        </Flex>
      </>
    );
  }

  if (!weatherData) {
    return <Spinner size="3"></Spinner>;
  }

  let backgroundImage;
  switch (weatherData.weather[0].main) {
    case "Rain":
      backgroundImage = `url(${RainSvg})`;
      break;
    case "Drizzle":
      backgroundImage = `url(${DrizzleSvg})`;
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

  let timestamp = "";

  if (uncachedWeatherData) {
    timestamp = new Date(
      (uncachedWeatherData.dt + uncachedWeatherData.timezone) * 1000
    ).toLocaleTimeString();
  }

  // const timestamp = new Date(
  //   if (uncachedWeatherData) {
  //     (uncachedWeatherData.dt + uncachedWeatherData.timezone) * 1000

  //   }
  // ).toLocaleTimeString();

  console.log(uncachedWeatherData);

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        exit={{ x: 100 }}
        animate={{ x: 0 }}
        layout
        transition={{
          duration: 0.01,
          type: "spring",
          stiffness: 549,
          mass: 1,
          damping: 32,
        }}
      >
        <div className="p-5 bg-gray-700 sm:p-2 shadow-xl border-gray-900 border-solid overflow-auto border-2">
          <div className="weather-content grid grid-rows-2 grid-auto-rows-min gap-6">
            <Flex direction="column">
              <Box>
                {/* <div className="heading-and-input grid-start-1 flex flex-col justify-between self-start gap-3"> */}
                <Text
                  as="p"
                  size="5"
                  weight="bold"
                  className=" text-yellow-300 mb-3 flex"
                >
                  World Weather
                </Text>
              </Box>
              <Box>
                <form
                  className="flex gap-4 md:flex-row flex-col"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="bg-gray-100 border Input border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-gray-800"
                    value={query}
                    onChange={inputQuery}
                    placeholder="Enter city"
                    onKeyDown={handleKeyDown}
                  />
                  <Button
                    type="sumbit"
                    variant="classic"
                    className="bg-blue-500 p-2 rounded-lg text-gray-100 hover:bg-blue-700 cursor-pointer"
                  >
                    <ArrowRightIcon />
                  </Button>
                </form>

                {/* </div> */}
              </Box>
            </Flex>
            <div>
              {weatherData && (
                <>
                  <div className="grid-start-2 self-center">
                    <Text
                      as="div"
                      size="2"
                      weight="medium"
                      className="city-and-country align-center flex text-gray-100 pl-2"
                    >
                      {weatherData.name},{weatherData.sys.country}, {timestamp}{" "}
                       {" "}
                    </Text>

                    <div className="weather-image-and-temperature flex justify-between flex-row text-yellow-200 items-center overflow-none">
                      <div className="p-1 justify-between align-top text-gray-100 flex flex-col items-center">
                        <div
                          className="relative w-16 h-16 bg-cover"
                          style={{ backgroundImage }}
                        ></div>
                        <Text as="p" size="2" weight="light">
                          {weatherData.weather[0].main}
                        </Text>
                      </div>
                      <Text
                        as="p"
                        size="7"
                        weight="medium"
                        className=" text-white"
                      >
                        {temperatureCelsius.toFixed()}°C
                      </Text>

                      <div></div>
                    </div>
                  </div>
                </>
              )}

              {error && (
                <Text as="p" size="2" weight="light">
                  Error: {error}
                </Text>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Weather;
