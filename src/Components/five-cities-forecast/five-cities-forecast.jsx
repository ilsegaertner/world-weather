import React from "react";
import { useState, useEffect } from "react";

const FiveCityForecast = () => {
  const [fiveCities, setFiveCities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiveCities();
  }, []);

  // let latSelect = 41.8933;
  // let lonSelect = 12.4754;

  const fetchFiveCities = async () => {
    try {
      const cities = [
        { name: "Rome", lat: 41.9028, lon: 12.4964 },
        { name: "New York", lat: 40.7128, lon: -74.006 },
        { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
        { name: "Shanghai", lat: 31.2304, lon: 121.4737 },
        { name: "Mumbai", lat: 19.076, lon: 72.8777 },
        { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
        { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
        { name: "Cairo", lat: 30.0444, lon: 31.2357 },
        { name: "Moscow", lat: 55.7558, lon: 37.6176 },
        { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
        { name: "London", lat: 51.5074, lon: -0.1278 },
        { name: "Paris", lat: 48.8566, lon: 2.3522 },
        { name: "Sydney", lat: -33.8688, lon: 151.2093 },
        { name: "Dubai", lat: 25.276987, lon: 55.296249 },
        { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
        { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
        { name: "Bangkok", lat: 13.7563, lon: 100.5018 },
        { name: "Singapore", lat: 1.3521, lon: 103.8198 },
        { name: "Seoul", lat: 37.5665, lon: 126.978 },
        { name: "Berlin", lat: 52.52, lon: 13.405 },
        { name: "Kigali", lat: -1.9441, lon: 30.0619 },
        { name: "Oslo", lat: 59.9139, lon: 10.7522 },
        { name: "Wellington", lat: -41.2865, lon: 174.7762 },
        { name: "Vancouver", lat: 49.2827, lon: -123.1207 },
        { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
        { name: "Nairobi", lat: -1.2864, lon: 36.8172 },
        { name: "Manila", lat: 14.5995, lon: 120.9842 },
        { name: "Edinburgh", lat: 55.9533, lon: -3.1883 },
        { name: "Havana", lat: 23.1136, lon: -82.3666 },
        { name: "Reykjavik", lat: 64.1466, lon: -21.9426 },
      ];

      const fiveRandomCities = [];
      while (fiveRandomCities.length < 5) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        fiveRandomCities.push(cities[randomIndex]);
      }

      const promises = fiveRandomCities.map(async (city) => {
        const { name, lat, lon } = city;

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4430e9e41106a5deb2aba2b74568af5e`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        return { name: data.name, temperature: data.main.temp };
      });

      const cityData = await Promise.all(promises);
      setFiveCities(cityData);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }

    // const randomCity = cities[Math.floor(Math.random() * cities.length)];
    // const { name, lat, lon } = randomCity;

    // const response = await fetch(
    //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=4430e9e41106a5deb2aba2b74568af5e`
    // );
    // if (!response.ok) {
    //   throw new Error("Failed to fetch data");
    // }
    // const data = await response.json();
    //   setFiveCities(data);
    //   console.log(data);
    //   console.log(data.name);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <>
      <div>
        {/* {fiveCities && (
          <div className="bg-red-600 w-48 h-48">
            {fiveCities.name}, {fiveCities.main.temp.toFixed()} °C
          </div>
        )} */}

        {error && <div>Error: {error}</div>}
        {fiveCities.map((city, index) => (
          <div key={index} className="bg-red-600 ">
            {" "}
            {city.name}, {city.temperature.toFixed()} °C{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default FiveCityForecast;
