import "./App.css";
import React from "react";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import Profile from "./Components/profile/profile";
import Weather from "./Components/weather/weather";
import MyMap from "./Components/MyMap/myMap";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Link, Switch, Navigate } from "react-router-dom";
import NameComponent from "./Components/name/name";
import LoopingComponent from "./Components/Looping/looping";
import MainComponent from "./Components/MainComponent";
import StateHandling from "./Components/StateHandling/state-handling";
import About from "./Components/about/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App bg-gray-800">
          <NavigationBar />
        </div>
        <Routes>
          {/* <Route
            path="/NavigationBar"
            element={<NavigationBar className="bg-white" />}
          />{" "} */}
          {/* <StateHandling /> */}
          <Route path="/" element={<MainComponent />} />
          <Route path="/weather" element={<MainComponent />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
