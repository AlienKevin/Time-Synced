import React from "react";
import TimezoneRow from "./TimezoneRow";
import TimezoneSelector from "./TimezoneSelector";
import moment from "moment-timezone";
import { generateSteppedColor } from "../utils";

function TimezoneGrid() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        fontSize: "1.2rem",
        width: "100%"
      }}
    >
      <TimezoneRow bg={generateSteppedColor(100, 10)} tz={moment.tz.guess()} />
      <TimezoneSelector />
    </div>
  );
}

export default TimezoneGrid;
