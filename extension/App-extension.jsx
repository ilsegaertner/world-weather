import React, { useEffect, useState, Suspense } from "react";
import { API_KEY } from "../src/config";

import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import moment from "moment";
import "moment-timezone";

import "../src/App.css";

import logo from "../src/assets/logos/logo.svg";

const timeBerlinNow = new Date();
console.log("Time Berlin now:", timeBerlinNow);

// Heading component
const Heading = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#1a202c" }}
        className="z-40  sticky top-0 w-full flex items-center pt-3 justify-center flex-col  py-3 gap-3 align-middle"
      >
        <img
          src={logo}
          loading="lazy"
          className=" w-6"
          alt="World Weather App logo"
        />
        <div
          as="div"
          weight="medium"
          className=" text-yellow-300 inline z-50 text-left sm:text-center text-2xl"
        >
          <span className="text-white">World</span> Weather
          <span className="text-blue-400"> App </span>
        </div>
      </div>
    </>
  );
};

// MyMap component

const MyMap = ({ city }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const cachedCoords = localStorage.getItem(city);
        if (cachedCoords) {
          setCoordinates(JSON.parse(cachedCoords));
          return;
        }

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch coordinates from OpenStreetMap Nominatim"
          );
        }
        const data = await response.json();
        console.log(data);
        if (data.length === 0) {
          throw new Error("No results found for the specified city");
        }

        const location = data[0];
        const newCoordinates = {
          lat: parseFloat(location.lat),
          lng: parseFloat(location.lon),
        };

        setCoordinates(newCoordinates);
        localStorage.setItem(city, JSON.stringify(newCoordinates));
        setError(null);
      } catch (error) {
        console.error("Error fetching coordinates: ", error);
      }
    };
    if (city) {
      fetchCoords();
    }
  }, [city]);

  // Use a key to force the map to re-render when the city changes
  const key = city || "default";

  const MapUpdater = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
  };

  return (
    <>
      <div className="border-0 border-gray-900 overflow-hidden z-0 mb-32">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div key={key}>
          {coordinates ? (
            <Suspense
              fallback={<div className="text-red-500">Loading map...</div>}
            >
              <MapContainer
                center={[coordinates.lat, coordinates.lng]}
                zoom={10}
                id="map"
                placeholder
              >
                <MapUpdater center={[coordinates.lat, coordinates.lng]} />
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              </MapContainer>
            </Suspense>
          ) : null}
        </div>
      </div>
    </>
  );
};

// AppExtension Component
const AppExtension = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [extractedWeatherData, setExtractedWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [finishedQuery, setFinishedQuery] = useState("");
  const [error, setError] = useState(null);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const limit = 1;

  const fetchCoords = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_KEY}
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
    if (error && error.includes("Cannot destructure property")) {
      const timeoutId = setTimeout(() => {
        setQuery("");
        setError(null);
      }, 1800);
      return () => clearTimeout(timeoutId);
    }
  }, [error, setError, setQuery]);

  useEffect(() => {
    if (finishedQuery) {
      fetchCoords(finishedQuery);
    }
  }, [finishedQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinishedQuery(query);
    // fetchCoords(finishedQuery);
  };

  const inputQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (lat !== null && lon !== null) {
      fetchWeatherData(lat, lon);
    }
  }, [lat, lon]);

  const fetchWeatherData = async (lat, lon) => {
    if (lat && lon) {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(
            "Couldn't get the weather data on the latitude and longitude"
          );
        }
        const extractedData = await response.json();

        setExtractedWeatherData(extractedData);
        console.log("ExtractedWeatherDataObject:", extractedData);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      }
    }
  };

  if (error) {
    return (
      <>
        <div className="text-xl p-2 text-red-500 absolute">
          Error: This city doesnt exist. Please try again.
        </div>
      </>
    );
  }

  let temperatureFahrenheit, temperatureCelsius, timestamp;
  if (extractedWeatherData) {
    const utcTime = moment.unix(extractedWeatherData.dt);
    const localTime = utcTime.utcOffset(extractedWeatherData.timezone / 60);
    timestamp = localTime.format("HH:mm");

    console.log(`"Timestamp queried:" ${query}`, timestamp);

    temperatureCelsius = extractedWeatherData.main.temp - 273.15;
    temperatureFahrenheit = extractedWeatherData.main.temp;
  }

  const toggleCelsiusFahrenheit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <>
      <Heading />
      <div className="bg-yellow-300 p-3 rounded-xl">
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-row justify-between p-1">
            <p className=""> Enter city</p> <p className="text-sm ">{query}</p>
          </div>
          <div className="flex-col gap-2 justify-between flex">
            <input
              type="text"
              placeholder="enter city"
              value={query}
              onChange={inputQuery}
              className=" p-1 rounded-md  shadow-md text-xl"
            />{" "}
            <button
              type="submit"
              className=" text-sm p-1 rounded-md hover:opacity-70 shadow-md cursor-pointer w-16"
            >
              Go
            </button>
          </div>

          {weatherData && <p className="text-md">{weatherData.name}</p>}
        </form>
        {error && <p>Error: {error}</p>}
      </div>
      {weatherData && weatherData[0] && (
        <div className=" bg-blue-400 p-3  rounded-xl flex flex-row justify-between">
          {/* <p className="inline">City: </p>{" "} */}
          <p className="inline font-bold text-xl">
            {" "}
            {weatherData[0].name}, {weatherData[0].country}{" "}
          </p>
          <p className="text-sm">{timestamp}</p>

          {/* <p>Lat: {weatherData[0].lat}</p>
          <p>Lon: {weatherData[0].lon}</p> */}
        </div>
      )}
      {extractedWeatherData && (
        <div className="bg-white p-3  text-md rounded-xl">
          <div className="flex-row flex justify-between gap-4">
            <div>
              {isCelsius ? (
                <p className="text-xl">
                  {" "}
                  <strong>{temperatureCelsius.toFixed()}°C</strong>
                </p>
              ) : (
                <p className="text-xl">
                  {" "}
                  <strong>{temperatureFahrenheit.toFixed()}°F </strong>
                </p>
              )}
            </div>
            <div>
              <button
                onClick={toggleCelsiusFahrenheit}
                className=" border-1 rounded-md shadow-md  p-2 text-sm"
              >
                {isCelsius ? "°F" : "°C"}
              </button>
              {/* <button>See next 5 days</button> */}
            </div>
          </div>

          <p> {extractedWeatherData.weather[0].description}</p>
        </div>
      )}{" "}
      <MyMap city={finishedQuery} />
    </>
  );
};

export default AppExtension;
