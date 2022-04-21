import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./displaySeason.js";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { latitude: null, errorMessage: "" };

//     navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ latitude: position.coords.latitude }),
//       (err) => this.setState({ errorMessage: err.message })
//     );
//   }

//   render() {
//     if (this.state.latitude) {
//       return <div>Latitude: {this.state.latitude}</div>;
//     } else if (this.state.errorMessage) {
//       return <div>errorMessage: {this.state.errorMessage}</div>;
//     } else {
//       return <div>Loading...</div>;
//     }
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  getLocation() {
    if (this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errorMessage) {
      return <div>errorMessage: {this.state.errorMessage}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return <DisplaySeason lat={this.state.lat} err={this.state.errorMessage} />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
