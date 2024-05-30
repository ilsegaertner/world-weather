import "./App.css";
import React from "react";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import About from "./Components/about/about";
import Contact from "./Components/contact/contact";
import LegalInfo from "./Components/legal-info/legal-info";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/weather" element={<MainComponent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal-info" element={<LegalInfo />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
