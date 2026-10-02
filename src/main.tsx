import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParticlesProvider init={particlesInit}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParticlesProvider>
  </StrictMode>,
);
