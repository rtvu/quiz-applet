import "../scss/styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Applet } from "./Applet";
import { Navbar } from "./Navbar";

const container = document.getElementById("application");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Navbar />
      <Applet />
    </StrictMode>,
  );
}
