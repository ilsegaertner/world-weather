import React from "react";
import { createRoot } from "react-dom/client";
import AppExtension from "./App-extension";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1>This should be rendered</h1>
    <AppExtension />
  </>
);
