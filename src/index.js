import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
