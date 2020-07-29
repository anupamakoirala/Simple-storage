import React, { Component } from "react";
import "./Layout.css";
function Form() {
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
export default Form;
