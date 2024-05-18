import React from "react";
import { useState } from "react";
import FooterComponent from "../footer-component/footer";

const About = () => {
  return (
    <>
      <div className="px-64 py-24 text-gray-100 xl:max-w-8xl bg-blue-900">
        <h1 className="text-yellow-400 text-4xl px-10 pb-8 leading-10 text-center">
          <span className="text-blue-700 pr-10">About</span>{" "}
          <span className="text-gray-100">World</span> Weather{" "}
          <span className="text-blue-400">App</span>
        </h1>
        <hr className=""></hr>
        <div className="p-10 leading-9 m-8 text-2xl text-gray-100">
          <p>
            Welcome to World Weather App, your trusted source for accurate and
            timely weather updates! <br></br>
            <br></br>Our mission is to provide you with reliable weather
            information to help you plan your day and stay safe, no matter where
            you are.
          </p>
        </div>

        <div className="p-10  rounded-xl m-8 bg-gradient-to-r from-blue-700 text-gray-100">
          <h2 className="text-yellow-400 text-xl">Our Story</h2>
          {/* <hr></hr> */}
          <p className="mt-8 leading-7">
            World Weather App was founded by a dedicated team of meteorologists
            and tech enthusiasts who saw the need for a user-friendly weather
            app that goes beyond basic forecasts. We aimed to create a platform
            that offers comprehensive weather insights and tools to make your
            daily planning easier and more efficient.
          </p>
        </div>

        <div className="p-10  rounded-xl m-8 bg-gradient-to-l from-blue-700 leading-7 text-gray-100">
          <h2 className="text-yellow-400 text-xl">What We Offer</h2>
          <hr></hr>
          <ul className="mt-8">
            <li>
              <strong>Today's Weather and Temperature:</strong> Get the latest
              weather updates and current temperatures for your location to help
              you plan your day effectively.
            </li>
            <li className="mt-8">
              <strong>Five-Day Forecast:</strong> Stay ahead with our detailed
              five-day weather forecast, providing you with an extended outlook
              to organize your week.
            </li>
            <li className="mt-8">
              <strong>Weather from Major Cities Worldwide:</strong> Explore the
              weather conditions in major cities around the globe with just a
              click, perfect for travel planning or staying connected with loved
              ones far away.
            </li>
          </ul>
        </div>

        <div className="p-10 rounded-xl m-8 bg-gradient-to-r from-blue-700 leading-7 text-gray-100">
          <h2 className="text-yellow-400 text-xl">
            {" "}
            Why Choose World Weather App?
          </h2>
          <ul className="mt-8">
            <li className="py-4">
              <strong>Accuracy:</strong> Utilizing advanced forecasting models
              and diverse data sources, we ensure highly accurate weather
              predictions.
            </li>
            <li className="py-4">
              <strong>User-Friendly Interface:</strong> Designed with simplicity
              and ease of use in mind, World Weather App makes it easy for users
              of all ages to navigate and find the information they need.
            </li>
            <li className="py-4">
              <strong>Global Coverage:</strong> Whether you’re at home or
              traveling, World Weather App provides reliable weather data for
              any location worldwide.
            </li>
            <li className="py-4">
              <strong>Personalization:</strong> Customize your weather
              experience with settings that match your preferences.
            </li>
          </ul>
        </div>

        <div className="p-10 rounded-xl m-8 bg-gradient-to-l from-blue-700 leading-7 text-gray-100">
          <h2 className="text-yellow-400 text-xl">Our Vision</h2>
          <p className="mt-8">
            At World Weather App, we envision a world where everyone has easy
            access to reliable weather information, making life safer and more
            enjoyable. We are committed to continuously improving our app with
            the latest technology and user feedback to ensure you have the best
            weather experience possible.
          </p>
        </div>

        <div className="p-10 rounded-xl m-8 bg-gradient-to-r from-blue-700 leading-7 text-gray-100">
          <h2 className="text-yellow-400 text-xl">Connect with Us</h2>
          <p className="mt-8">
            We love hearing from our users! If you have any questions, feedback,
            or suggestions, please reach out to us through our contact page or
            connect with us on social media. Stay updated with our latest
            features and weather news by following our blog.
          </p>
        </div>
        <p className="p-10 m-8">
          Thank you for choosing World Weather App. We’re excited to be your
          trusted weather partner, rain or shine!
        </p>

        <p className=" p-10 text-yellow-400 m-8 justify-center flex">
          <strong>World Weather App – Your Weather, Your Way.</strong>
        </p>
      </div>
      <FooterComponent />
    </>
  );
};

export default About;
