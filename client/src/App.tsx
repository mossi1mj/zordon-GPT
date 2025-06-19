import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";

function App() {
  const [count, setCount] = useState(320);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      // Optional
    },
    []
  );

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Particle Box Container */}
      <div
        style={{
          width: 300,
          height: 300,
          margin: "1rem auto",
          position: "relative",
          borderRadius: 12,
          border: "2px solid white",
          backgroundColor: "#0d47a1",
          overflow: "hidden",
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: { color: "#0d47a1" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              number: {
                value: count,
                density: { enable: true, area: 800 },
              },
              color: { value: "#ffffff" },
              links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                outModes: { default: "bounce" },
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Particle Count Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            padding: "4px 8px",
            borderRadius: 6,
            fontSize: "0.875rem",
          }}
        >
          Count: {count}
        </div>
      </div>

      {/* Card below particle box */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          Add Particles
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
