import React from "react";
import ReactDOM from "react-dom";

class DisplaySeason extends React.Component {
  constructor(props) {
    super(props);
    this.data = props;
  }

  render() {
    return <div>{this.data}</div>;
  }
}

export default DisplaySeason;
