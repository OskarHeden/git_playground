import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      swapTitle: false,
      title: "Real footer title"
    };
  }

  onFooterClick = () => {
    const shouldSwap = !this.state.swapTitle;
    this.setState({
      swapTitle: shouldSwap,
      title: shouldSwap ? "Fake footer title" : "Real footer title"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer onClick={this.onFooterClick} title={this.state.title} />
      </div>
    );
  }
}

export default App;
