import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../App.css";

const MyMap = ({ city }) => {
  const [coordinates, setCoordinates] = useState();

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
        const location = data.results[0].geometry.location;
        setCoordinates({ lat: location.lat, lng: location.lng });
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

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div id="map" key={key}>
          {coordinates && (
            <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={10}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* <TileLayer
                url="http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?date=1552861800&opacity=0.9&fill_bound=true&appid=4430e9e41106a5deb2aba2b74568af5e
"
              /> */}
              {/* <Marker position={[coordinates.lat, coordinates.lng]}>
                <Popup>{city}</Popup>
              </Marker> */}
            </MapContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default MyMap;
