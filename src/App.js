import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    const MyContract = window.web3.eth.contract([
      {
        constant: false,
        inputs: [],
        name: "kill",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "getSecret",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "you_awesome",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      { payable: true, stateMutability: "payable", type: "fallback" }
    ]);

    this.state = {
      ContractInstance: MyContract.at(
        "0xf35ccdd590b80c81d6864dcb870444dd8ce8c6bc"
      )
    };
  }

  querySecret = () => {
    const { getSecret } = this.state.ContractInstance;

    getSecret((err, secret) => {
      if (err) console.error("An error occured::::", err);
      console.log("This is our contract's secret::::", secret);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React & Ethereum Connection</h1>
        </header>
        <br />
        <br />
        <button onClick={this.querySecret}>
          Query Smart Contract's Secret
        </button>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
