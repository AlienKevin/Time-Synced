import React from "react";
import TimezoneRow from "./TimezoneRow";
import moment from "moment-timezone";

function TimezoneGrid() {
  return (
    <div
      style={{
        maxWidth: "400px",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gridColumnGap: "2rem",
        gridRowGap: "1rem",
        margin: "auto",
        fontSize: "1.2rem"
      }}
    >
      <TimezoneRow tz={moment.tz.guess()} />
      <TimezoneRow tz={"Asia/Shanghai"} />
      <TimezoneRow tz={"Asia/Tokyo"} />
      <TimezoneRow tz={"Europe/Berlin"} />
      <TimezoneRow tz={"Europe/London"} />
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