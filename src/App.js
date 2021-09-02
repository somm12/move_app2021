import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  //state => the place that data is put. and the data is changed
  state = {
    count: 0,
  };
  //everytime you call setstate, react will rerender
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
