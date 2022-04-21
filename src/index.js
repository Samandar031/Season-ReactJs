import React from "react";
import ReactDOM from "react-dom";

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
      (position) => (this.state.lat = position.coords.latitude),
      (err) => (this.state.err = err.errorMessage)
    );
  }

  render() {
    if (this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errorMessage) {
      return <div>errorMessage: {this.state.errorMessage}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
