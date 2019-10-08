import React from "react";

class App extends React.Component {

  render() {
    return (<h1>Hello</h1>)
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
  }

}

export default App
