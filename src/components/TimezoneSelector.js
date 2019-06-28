import React from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";

// const PlaceOption = props => {
//   const { value, innerRef, innerProps } = props;
//   console.log(value);
//   const option = document.createElement("div");
//   option.insertAdjacentHTML("beforeend", value);
//   return (
//     <div ref={innerRef} {...innerProps}>
//       weio
//     </div>
//   )
// };

const getPlaceOptions = inputPlace =>
  new Promise(resolve => {
    getPlace(inputPlace).then(json => {
      // console.log(json);
      const options = [];
      Object.values(json).forEach(place => {
        options.push({
          value: place.text,
          label: extractContent(place.text).replace(/(:[0-5][0-9])/g, "$1 ")
        });
      });
      resolve(options);
    });
  });

class TimezoneSelector extends React.Component {
  render() {
    return (
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={getPlaceOptions} /*components={{ Option: PlaceOption }}*/
      />
    );
  }
}

function getPlace(place) {
  // cors-anywhere api: https://github.com/Rob--W/cors-anywhere/
  let corsApi = "https://cors-anywhere.herokuapp.com/";
  // using GeoNames api
  // let url = corsApi + `api.geonames.org/searchJSON?name=${place}&cities=cities5000&maxRows=10&username=WSOwLqgDV`;
  // using api from https://www.worldtimebuddy.com/
  let url = corsApi + `www.worldtimebuddy.com/helper/locations?q=${place}`;
  return fetch(url, {
    method: "get"
  }).then(function(response) {
    return response.json();
  });
}

// source: https://stackoverflow.com/a/28899585/6798201
function extractContent(s) {
  var span = document.createElement("span");
  span.innerHTML = s;
  return span.textContent || span.innerText;
}

export default TimezoneSelector;
