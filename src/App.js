import "./App.css";
import React from "react";
import MainComponent from "./Components/MainComponent";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import Profile from "./Components/profile/profile";
import Weather from "./Components/weather/weather";
import MyMap from "./Components/MyMap/myMap";
import Home from "./Components/home/home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App bg-gray-500 h-screen">
          <NavigationBar className="bg-white" />
          <div className="flex flex-row align-middle justify-between m-10 max-w-5xl overflow-hidden m-auto">
            <MainComponent />
            <Weather className="shadow-2xl" />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
