import React from "react";
import ReactDOM from "react-dom";

const getYear = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "yoz" : "qish";
  } else if (month < 2 && month > 9) {
    return lat < 0 ? "qish" : "yoz";
  }
};

const getMonth = function () {
  return new Date().getMonth();
};
let monthAtdush = getMonth();

const DisplaySeason = (props) => {
  console.log(props);

  return <div>{getYear(props.lat, getMonth)}</div>;
};

// class DisplaySeason extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = props;
//   }

//   render() {
//     return <div>{this.data}</div>;
//   }
// }

export default DisplaySeason;
