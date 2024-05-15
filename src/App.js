import "./App.css";
import React from "react";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import Profile from "./Components/profile/profile";
import Weather from "./Components/weather/weather";
import MyMap from "./Components/MyMap/myMap";
import Home from "./Components/home/home";
import { BrowserRouter } from "react-router-dom";
import NameComponent from "./Components/name/name";
import LoopingComponent from "./Components/Looping/looping";
import MainComponent from "./Components/MainComponent";
import StateHandling from "./Components/StateHandling/state-handling";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App bg-gray-800 h-screen">
          {/* <NavigationBar className="bg-white" /> */}

          {/* <StateHandling /> */}

          <MainComponent />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
