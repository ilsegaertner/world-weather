import React from "react";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Weather from "../weather/weather";
import Profile from "../profile/profile";
import About from "../about/about";

const NavigationBar = () => {
  return (
    <>
      {/* <p className="text-3xl text-yellow-300 mb-3 inline"> World Weather App</p> */}

      <nav className="bg-gray-100 p-5 shadow-md rounded-br-2xl">
        <ul className="text-lg ">
          <li className="hover:text-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="hover:text-gray-600">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
