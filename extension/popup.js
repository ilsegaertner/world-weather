import React from "react";
import { createRoot } from "react-dom/client";
import AppExtension from "./App-extension";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <AppExtension />
  </>
);
