import React from "react";
import ReactDOM from "react-dom";

// navigator.geolocation.getCurrentPosition(
//   function (pas) {
//     console.log(pas);
//   },
//   function (err) {
//     console.log(err);
//   }
// );

class App extends React.Component {
  loc;
  constructor(props) {
    super(props);
    this.state;
  }
  render() {
    navigator.geolocation.getCurrentPosition(
      function (pas) {
        console.log(pas);
        loc = pos;
      },
      function (err) {
        console.log(err);
      }
    );

    return <div>Hello world</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
