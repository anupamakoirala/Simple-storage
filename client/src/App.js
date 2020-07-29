import React, { Component } from "react";
import Web3 from "web3";
import Simplestorage from "./contracts/Simplestorage.json";
import "./App.css";
import Form from "./Layout";

const web3 = new Web3(Web3.givenProvider);

class App extends Component {
  render() {
    return <Form />;
  }
}
export default App;
