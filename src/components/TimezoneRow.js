import React from "react";
import Moment from "react-moment";

function TimezoneRow(props) {
  const tz = props.tz;
  const bg = props.bg;
  console.log(bg);
  const flexItemStyle = {
    padding: "1rem",
    flexBasis: "33%"
  };
  return (
    <div
      style={{
        background: bg,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "1rem"
      }}
    >
      <span style={flexItemStyle}> {tz.split("/")[1].replace(/_/g, " ")}</span>
      <Moment style={flexItemStyle} format="h:mm a" interval={100} tz={tz} />
      <Moment
        style={flexItemStyle}
        format="ddd, MMM D"
        interval={100}
        tz={tz}
      />
    </div>
  );
}

export default TimezoneRow;
