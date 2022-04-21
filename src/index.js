import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };

    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    } else if (this.state.errorMessage) {
      return <div>errorMessage: {this.state.errorMessage}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
