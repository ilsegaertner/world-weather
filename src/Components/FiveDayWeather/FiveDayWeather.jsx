import React from "react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { API_KEY } from "../../config";

import { Text, Heading, Spinner, Card } from "@radix-ui/themes";
import RainSvg from "../../assets/amcharts_weather_icons_1.0.0/static/rainy-7.svg";
import CloudsSvg from "../../assets/amcharts_weather_icons_1.0.0/static/cloudy.svg";
import ClearSvg from "../../assets/amcharts_weather_icons_1.0.0/static/day.svg";

const FiveDayWeather = ({ lat, lon, city }) => {
  const [fiveDayWeather, setFiveDayWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchFiveDayWeather = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setFiveDayWeather(data);
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

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      weekday: "short",
    };
    return date.toLocaleDateString("en-US", options);
  };

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
    return <Spinner size="2"></Spinner>;
  }

  if (error) {
    return (
      <Text as="p" size="2" weight="light">
        {" "}
        Error: {error}
      </Text>
    );
  }

  if (!lat || !lon) {
    return (
      <Text as="p" size="2" weight="light">
        Latitude and longitude are required.
      </Text>
    );
  }

  console.log(threeOClockValues);

  if (threeOClockValues.length > 0) {
    return (
      <>
        <Card size="1">
          <div className="p-5 bg-gray-600 sm:p-2  overflow-auto flex flex-col justify-between gap-8  h-full">
            <Heading
              as="p"
              size="5"
              weight="bold"
              trim="end"
              className="flex  text-gray-100 m-0"
            >
              Forecast
            </Heading>
            <Text
              as="p"
              size="5"
              weight="medium"
              className="flex  text-black rounded-xl"
            >
              {" "}
              {city}
            </Text>

            <div className="flex justify-between flex-wrap sm:flex-no-wrap">
              {threeOClockValues.map((item, index) => (
                <Text
                  as="div"
                  size="2"
                  weight="light"
                  key={index}
                  className="flex flex-col text-blue-100 pl-0 px-4 items-start"
                >
                  {formatDateTime(item.dt_txt)}{" "}
                  <Text
                    as="span"
                    size="2"
                    weight="medium"
                    className="text-md text-gray-100"
                  >
                    {item.main.temp.toFixed()}°C
                  </Text>
                  <div
                    className="relative w-10 h-10 bg-cover"
                    style={{ backgroundImage: backgroundImages[index] }}
                  ></div>
                </Text>
              ))}
            </div>
          </div>
        </Card>
      </>
    );
  } else {
    return <p>No weather data available</p>;
  }
};

export default FiveDayWeather;
