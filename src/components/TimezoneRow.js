import React, { Fragment } from "react";
import Moment from "react-moment";

function TimezoneRow(props) {
  const tz = props.tz;
  return (
    <Fragment>
      <span>{tz.split("/")[1].replace(/_/g, " ")}</span>
      <Moment format="h:mm a" interval={100} tz={tz} />
      <Moment format="ddd, MMM D" interval={100} tz={tz} />
    </Fragment>
  );
}

export default TimezoneRow;
