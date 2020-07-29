const Simplestorage = artifacts.require("Simplestorage");

module.exports = function (deployer) {
  deployer.deploy(Simplestorage);
};
