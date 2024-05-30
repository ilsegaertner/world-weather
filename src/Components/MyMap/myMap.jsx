import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import "../../App.css";

const MyMap = ({ city }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyBKfBTaWvjhxabyqesd6-vSUfv4qst1h1M`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch coordinates from Google Maps");
        }
        const data = await response.json();
        if (data.results.length === 0) {
          throw new Error("No results found for the specified city");
        }
        const location = data.results[0].geometry.location;
        setCoordinates({ lat: location.lat, lng: location.lng });
        setError(null);
      } catch (error) {
        console.error("Error fetching coordinates: ", error);
        setError("Could not fetch coordinates. Please try again later.");
      }
    };
    if (city) {
      fetchCoords();
    }
  }, [city]);

  // Use a key to force the map to re-render when the city changes
  const key = city || "default";

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div key={key}>
          {coordinates && (
            <MapContainer
              center={[coordinates.lat, coordinates.lng]}
              zoom={10}
              id="map"
              placeholder
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              <Marker position={[coordinates.lat, coordinates.lng]}>
                <Popup>{city}</Popup>
              </Marker>
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default MyMap;
