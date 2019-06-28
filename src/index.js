import React from "react";
import ReactDOM from "react-dom";
import invert from "invert-color";
import TimezoneGrid from "./components/TimezoneGrid";
import { generateRandomColor } from "./utils";

import "./styles.css";

function App() {
  return (
    <div
      className="App"
      style={(() => {
        const randomBackgroundColor = generateRandomColor();
        const foregroundColor = invert(randomBackgroundColor, {
          black: "#3a3a3a",
          white: "#fafafa"
        });
        return {
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: randomBackgroundColor,
          color: foregroundColor
        };
      })()}
    >
      <TimezoneGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
