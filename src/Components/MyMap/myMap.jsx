import React, { useEffect, useState, Suspense, lazy } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { API_KEY_MAPS } from "../../config";

import "../../App.css";

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
          // `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${API_KEY_MAPS}`
          `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
          // `https://nominatim.openstreetmap.org/search?q=${city}&format=json&addressdetails=1&limit=1&polygon_svg=1`
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

        // const location = data.results[0].geometry.location;
        // const newCoordinates = { lat: location.lat, lng: location.lng };
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
      <div className="border-2 border-gray-900 overflow-hidden">
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div key={key}>
          {coordinates ? (
            <Suspense fallback={<div>Loading map...</div>}>
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
          ) : (
            <p>Loading map...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MyMap;
