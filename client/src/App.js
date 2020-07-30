import React, { Component, useState } from "react";
import getWeb3 from "./getWeb3";
import Simplestorage from "./contracts/Simplestorage.json";
import "./App.css";
// import Form from "./Layout";

// const web3 = new Web3(Web3.givenProvider);
// // const networkId = web3.eth.getAccounts();
// let deployedNetwork = Simplestorage.networks[networkId];
// const SimpleContract = new web3.eth.Contract(
//   Simplestorage.abi,
//   deployedNetwork && deployedNetwork.address
// );
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      //Get the contract instance
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.getId();
      let deployedNetwork = Simplestorage.networks[networkId];
      const SimpleContract = new web3.eth.Contract(
        Simplestorage.abi,
        deployedNetwork && deployedNetwork.address
      );
      this.setState(
        { web3, accounts, contract: SimpleContract },
        this.runExample
      )``;
    } catch (error) {
      alert(
        "Failed to load web3,accounts,or contract check console for details"
      );
      console.error(error);
    }
  };
  runExample = async () => {
    const [text, settext] = useState(0);
    const [gettext, setgettext] = useState("0x00");
  };

  render() {
    return (
      <div className="Title">
        <h1> Simple Storage</h1>
        <div className="Preview">
          <p>
            First attempt to create a decentralized App(dApp) using truffle and
            React
          </p>
          <p>
            {" "}
            Stores your content in the <strong> BlockChain </strong>
          </p>
          <form name>
            <label>
              {" "}
              Input:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <button name="button" variant="outline-primary" type="button">
            GetData
          </button>
        </div>
      </div>
    );
  }
}
export default App;
