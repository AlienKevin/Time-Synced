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
        return {
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        };
      })()}
    >
      <TimezoneGrid />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
