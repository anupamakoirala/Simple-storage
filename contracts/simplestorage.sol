//SPDX-License-Identifier:MIT
pragma solidity >=0.4.21 <0.7.0;

contract simplestorage {
    string storedData;

    function store(string memory x) public {
        storedData = x;
    }

    function get() public view returns (string memory) {
        return storedData;
    }
}
