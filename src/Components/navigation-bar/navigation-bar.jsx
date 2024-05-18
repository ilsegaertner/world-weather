import React from "react";
// import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Route, Switch, Link } from "react-router-dom";
import Weather from "../weather/weather";
import Contact from "../contact/contact";
import About from "../about/about";

const NavigationBar = () => {
  return (
    <>
      {/* <p className="text-3xl text-yellow-300 mb-3 inline"> World Weather App</p> */}

      <nav className="bg-gray-100 p-5 mb-5 shadow-md rounded-b-2xl max-w-xs m-auto sm:absolute sm:ml-10">
        <ul className="text-lg ">
          <li className="hover:text-gray-600 transition-colors transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-600 transition-colors transition-all duration-200">
            <Link to="/weather">Weather</Link>
          </li>
          <li className="hover:text-gray-600 transition-colors transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
