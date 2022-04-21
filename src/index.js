import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 1 };
  }

  render() {
    navigator.geolocation.getCurrentPosition(
      function (pas) {
        // this.setState({let,lon})
        console.log(pas);
      },
      function (err) {
        console.log(err);
      }
    );

    return <div>Latitude: {this.state.latitude}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
