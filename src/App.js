import "./App.css";
import React, { lazy, Suspense } from "react";
import NavigationBar from "./Components/navigation-bar/navigation-bar";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Theme, ThemePanel, Spinner } from "@radix-ui/themes";

import Heading from "./Components/heading/heading";
const MainComponent = lazy(() => import("./Components/MainComponent"));
const About = lazy(() => import("./Components/about/about"));
const Contact = lazy(() => import("./Components/contact/contact"));
const LegalInfo = lazy(() => import("./Components/legal-info/legal-info"));

function App() {
  return (
    <>
      <Theme
        scaling="110%"
        accentColor="yellow"
        grayColor="gray"
        panelBackground="translucent"
        radius="full"
      >
        <BrowserRouter>
          <div className="App">
            <NavigationBar />
            <Heading />

            <Suspense fallback={<Spinner size="2" />}>
              <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/weather" element={<MainComponent />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/legal-info" element={<LegalInfo />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
        {/* <ThemePanel /> */}
      </Theme>
    </>
  );
}

export default App;
