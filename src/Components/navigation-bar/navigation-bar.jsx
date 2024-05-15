import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "../home/home";
import Weather from "../weather/weather";
import Profile from "../profile/profile";

const NavigationBar = () => {
  return (
    <>
      {/* <p className="text-3xl text-yellow-300 mb-3 inline"> World Weather App</p> */}

      <nav className="bg-white p-5 shadow-md">
        <ul style={{ fontStyle: "italic" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
