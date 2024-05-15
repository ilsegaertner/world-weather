import React from "react";
import { useState, useEffect } from "react";

const FiveCityForecast = () => {
  const [fiveCities, setFiveCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiveCities();
  }, []);

  const fetchFiveCities = async () => {
    try {
      console.log("Fetching five cities...");
      const cities = [
        { id: 1, name: "Rome", lat: 41.9028, lon: 12.4964 },
        { id: 2, name: "New York", lat: 40.7128, lon: -74.006 },
        { id: 3, name: "Tokyo", lat: 35.6895, lon: 139.6917 },
        { id: 4, name: "Shanghai", lat: 31.2304, lon: 121.4737 },
        { id: 5, name: "Mumbai", lat: 19.076, lon: 72.8777 },
        { id: 6, name: "São Paulo", lat: -23.5505, lon: -46.6333 },
        { id: 7, name: "Mexico City", lat: 19.4326, lon: -99.1332 },
        { id: 8, name: "Cairo", lat: 30.0444, lon: 31.2357 },
        { id: 9, name: "Moscow", lat: 55.7558, lon: 37.6176 },
        { id: 10, name: "Istanbul", lat: 41.0082, lon: 28.9784 },
        { id: 11, name: "London", lat: 51.5074, lon: -0.1278 },
        { id: 12, name: "Paris", lat: 48.8566, lon: 2.3522 },
        { id: 13, name: "Sydney", lat: -33.8688, lon: 151.2093 },
        { id: 14, name: "Dubai", lat: 25.276987, lon: 55.296249 },
        { id: 15, name: "Cape Town", lat: -33.9249, lon: 18.4241 },
        { id: 16, name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
        { id: 17, name: "Bangkok", lat: 13.7563, lon: 100.5018 },
        { id: 18, name: "Singapore", lat: 1.3521, lon: 103.8198 },
        { id: 19, name: "Seoul", lat: 37.5665, lon: 126.978 },
        { id: 20, name: "Berlin", lat: 52.52, lon: 13.405 },
        { id: 21, name: "Kigali", lat: -1.9441, lon: 30.0619 },
        { id: 22, name: "Oslo", lat: 59.9139, lon: 10.7522 },
        { id: 23, name: "Wellington", lat: -41.2865, lon: 174.7762 },
        { id: 24, name: "Vancouver", lat: 49.2827, lon: -123.1207 },
        { id: 25, name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
        { id: 26, name: "Nairobi", lat: -1.2864, lon: 36.8172 },
        { id: 27, name: "Manila", lat: 14.5995, lon: 120.9842 },
        { id: 28, name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
        { id: 29, name: "Havana", lat: 23.1136, lon: -82.3666 },
        { id: 30, name: "Reykjavik", lat: 64.1466, lon: -21.9426 },
      ];

      const cachedData = JSON.parse(localStorage.getItem("weatherData")) || {};
      const selectedCities = new Set();

      const promises = [];
      while (selectedCities.size < 5) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        const city = cities[randomIndex];
        if (!selectedCities.has(city.id)) {
          selectedCities.add(city.id);
          if (cachedData[city.id]) {
            setFiveCities((prevCities) => [...prevCities, cachedData[city.id]]);
          } else {
            const promise = fetchWeatherData(city);
            promises.push(promise);
          }
        }
      }

      const cityData = await Promise.all(promises);
      cityData.forEach((data) => {
        setFiveCities((prevCities) => [...prevCities, data]);
        cachedData[data.id] = data;
      });

      localStorage.setItem("weatherData", JSON.stringify(cachedData));
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  const fetchWeatherData = async (city) => {
    const { id, name, lat, lon } = city;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4430e9e41106a5deb2aba2b74568af5e`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);

    if (data.name === "Konkan Division") {
      return { id, name: "Mumbai", temperature: data.main.temp };
    } else if (data.name === "Shanghai Municipality") {
      return { id, name: "Shanghai", temperature: data.main.temp };
    } else if (data.name === "Al ‘Atabah" || data.name === "Al 'Atabah") {
      return { id, name: "Cairo", temperature: data.main.temp };
    } else if (data.name === "Trevi") {
      return { id, name: "Rome", temperature: data.main.temp };
    } else if (data.name === "Liberdade") {
      return { id, name: "São Paulo", temperature: data.main.temp };
    } else if (data.name === "Karaköy") {
      return { id, name: "Istanbul", temperature: data.main.temp };
    } else if (data.name === "Mitte") {
      return { id, name: "Berlin", temperature: data.main.temp };
    } else if (data.name === "Bright Hill Crescent") {
      return { id, name: "Singapore", temperature: data.main.temp };
    } else if (data.name === "De Waterkant") {
      return { id, name: "Cape Town", temperature: data.main.temp };
    } else if (data.name === "Grímsstaðaholt") {
      return { id, name: "Reykjavík", temperature: data.main.temp };
    } else if (data.name === "Saint-Merri") {
      return { id, name: "Paris", temperature: data.main.temp };
    } else if (data.name === "Nonthaburi") {
      return { id, name: "Bankok", temperature: data.main.temp };
    } else if (data.name === "San Nicolas") {
      return { id, name: "Buenos Aires", temperature: data.main.temp };
    }
    return { id, name: data.name, temperature: data.main.temp };
  };

  return (
    <>
      <div className="bg-gray-600 xl:max-w-sm m-auto rounded-2xl p-10 shadow-xl ">
        <p className="flex my-8 text-xl text-yellow-300">International Today</p>
        <hr />
        {/* {fiveCities && (
          <div className="bg-red-600 w-48 h-48">
            {fiveCities.name}, {fiveCities.main.temp.toFixed()} °C
          </div>
        )} */}

        {error && <div>Error: {error}</div>}
        {fiveCities.slice(0, 5).map((city) => (
          <div key={city.id} className="py-1 flex">
            {" "}
            <div className="flex justify-between text-blue-100">
              <div>{city.name} </div>
              <div className="pl-5">{city.temperature.toFixed()} °C </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FiveCityForecast;
