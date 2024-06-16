import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav className="bg-gray-100 p-5 mb-5 shadow-md rounded-b-2xl max-w-xs m-auto sm:ml-10 top-0 sm:fixed">
        <ul className="text-lg ">
          <li className="hover:text-gray-600 transition-all duration-200">
            <Link to="/about">About</Link>
          </li>
          <hr />
          <li className="hover:text-gray-600 transition-all duration-200 text-xl">
            <Link to="/weather">Weather</Link>
          </li>
          <hr />
          <li className="hover:text-gray-600 transition-all duration-200">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationBar;
