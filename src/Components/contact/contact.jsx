import React from "react";
import { useState } from "react";
import FooterComponent from "../footer-component/footer";
import logo from "../../assets/logos/logo.svg";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Link to="/weather">
        <img
          src={logo}
          className="ml-48 absolute text-xs text-white w-16 h-auto hover:opacity-75"
          alt="World Weather App logo"
        />
      </Link>
      <div className="md:px-24 lg:px-48 xl:px-64 py-24 text-gray-100 xl:max-w-8xl bg-blue-800">
        <h1 className="text-yellow-400 text-4xl px-10 pb-8 leading-7 text-center">
          <span className="">Contact</span>{" "}
        </h1>
        <hr className=""></hr>
        <div className="p-10 sm:leading-9 sm:m-8 sm:text-2xl text-gray-100">
          <p>
            Thank you for your interest in contacting us!<br></br> <br></br> We
            value your feedback, inquiries, and suggestions. Whether you have
            questions about our app, need assistance, or want to collaborate,
            we're here to help.{" "}
          </p>
          <div className="bg-blue-900 p-10 m-10 rounded-3xl ml-0 mr-0">
            <p className="mt-8">
              Please feel free to reach out to us using the contact information
              below:
            </p>

            <p className="mt-16">
              <strong>Email:</strong> contact@worldweatherapp.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              World Weather App
              <br />
              123 Weather Way
              <br />
              City, State, Zip Code
              <br />
              Country
            </p>
          </div>
          <p className="mt-16">
            We strive to respond to all inquiries promptly.
          </p>
          <div></div>
          <p className="mt-16">
            We look forward to hearing from you and assisting you with any
            weather-related needs. Thank you for choosing World Weather App!
          </p>
          <div className="mt-16">
            <button
              className="bg-yellow-200 p-3 sm:p-4 rounded-lg text-gray-900 hover:bg-yellow-300 duration-200 sm:text-2xl"
              onClick={navigateToHome}
            >
              Back to Home
            </button>{" "}
            {/* Include a link back to the home page */}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Contact;
