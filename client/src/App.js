import React, { Component, useState } from "react";
import getWeb3 from "./getWeb3";
import Simplestorage from "./contracts/Simplestorage.json";
import "./App.css";
import Web3 from "web3";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
    set: 0,
  };

  componentDidMount = async () => {
    try {
      //Get the contract instance
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      let deployedNetwork = Simplestorage.networks[networkId];
      const SimpleContract = new web3.eth.Contract(
        Simplestorage.abi,
        deployedNetwork && deployedNetwork.address
      );
      this.setState(
        { web3, accounts, contract: SimpleContract },
        this.runExample
      );
    } catch (error) {
      alert(
        "Failed to load web3,accounts,or contract check console for details"
      );
      console.error(error);
    }
  };
  runExample = async () => {
    const { accounts, contract } = this.state;
    const [text, settext] = useState(0);
    const [gettext, setgettext] = useState("0x00");

    const handleGet = async (e) => {
      e.preventDefault();
      const result = await contract.methods.get().call();
      setgettext(result);
      console.log(result);
      // this.setState({ storageValue: result });
    };
    const handleSet = async (e) => {
      e.preventDefault();
      const accounts = await window.etherum.enable();
      const account = accounts[0];
      const gas = await contract.methods.set(5).estimaateGas();
      const result = await contract.methods.set(5).send({
        from: account,
        gas,
      });
      console.log(result);
    };
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
          <form>
            <label>
              {" "}
              Input:
              <input
                type="text"
                name=""
                value={this.runExample.text}
                onChange={(e) => e.target.value}
              />
            </label>
            <input type="submit" value="set Text" />
          </form>
          <button
            name="button"
            variant="outline-primary"
            type="button"
            onClick={this.runExample.handleGet}
          >
            GetData
          </button>
          {this.state.storageValue}
        </div>
      </div>
    );
  }
}
// const web3 = new Web3(Web3.givenProvider);
// const contractAddr = "0x97EaC1d4C5eA22dE6ba7292FA5d01a591Aac83A7";
// const SimpleContract = new web3.eth.Contract(Simplestorage.abi, contractAddr);

// function App() {
//   const [text, settext] = useState();
//   const [gettext, setgettext] = useState();

//   const handleSet = async (e) => {
//     e.preventDefault();
//     const accounts = await window.ethereum.enable();
//     const account = accounts[1];
//     const gas = await SimpleContract.methods.set(text).estimateGas();
//     const result = await SimpleContract.methods
//       .set(text)
//       .send({ from: account, gas });
//     console.log(result);
//   };

//   const handleGet = async (e) => {
//     e.preventDefault();
//     const result = await SimpleContract.methods.get().call();
//     setgettext(result);
//     console.log(result);
//   };
//   return (
//     <div className="Title">
//       <h1> Simple Storage</h1>
//       <div className="Preview">
//         <p>
//           First attempt to create a decentralized App(dApp) using truffle and
//           React
//         </p>
//         <p>
//           {" "}
//           Stores your content in the <strong> BlockChain </strong>
//         </p>
//         <form name>
//           <label>
//             {" "}
//             Input:
//             <input
//               type="text"
//               name="name"
//               value={text}
//               onchange={(e) => settext(e.target.value)}
//             />
//           </label>
//           <input type="submit" value="set Text" />
//         </form>
//         <button
//           name="button"
//           variant="outline-primary"
//           type="button"
//           onclick={handleGet}
//         >
//           GetData
//         </button>
//         {gettext}
//       </div>
//     </div>
//   );
// }
export default App;
