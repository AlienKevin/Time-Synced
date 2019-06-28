import React from "react";
import TimezoneRow from "./TimezoneRow";
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
      <TimezoneRow bg={generateSteppedColor(100, 90)} tz={"Asia/Shanghai"} />
      <TimezoneRow bg={generateSteppedColor(100, 20)} tz={"Asia/Tokyo"} />
      <TimezoneRow bg={generateSteppedColor(100, 60)} tz={"Europe/Berlin"} />
      <TimezoneRow bg={generateSteppedColor(100, 50)} tz={"Europe/London"} />
    </div>
  );
}

function getPlace(place) {
  // cors-anywhere api: https://github.com/Rob--W/cors-anywhere/
  let corsApi = "https://cors-anywhere.herokuapp.com/";
  // using GeoNames api
  // let url = corsApi + `api.geonames.org/searchJSON?name=${place}&cities=cities5000&maxRows=10&username=WSOwLqgDV`;
  // using api from https://www.worldtimebuddy.com/
  let url = corsApi + `www.worldtimebuddy.com/helper/locations?q=${place}`;
  fetch(url, {
    method: "get"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      return json;
    });
}

export default TimezoneGrid;
