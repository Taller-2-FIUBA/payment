const getWalletData = require("./handlers/getWalletHandler");
const getWalletsData = require("./handlers/getWalletsHandler");
const createWallet = require("./handlers/createWalletHandler");
const createDeposit = require("./handlers/createDepositHandler");
const getDeposit = require("./handlers/getDepositHandler");
const getWalletBalance = require("./handlers/getWalletBalanceHandler");
const makeExtraction = require("./handlers/makeExtractionHandler");
const addBalance = require("./handlers/addBalanceHandler");

const BASE_URI = "/payment";
function getWalletDataRoute({ services, config }) {
  return {
    method: "GET",
    url: BASE_URI + "/wallet/:id",
    schema: getWalletData.schema(config),
    handler: getWalletData.handler({ config, ...services }),
  };
}

function getWalletsDataRoute({ services, config }) {
  return {
    method: "GET",
    url: BASE_URI + "/wallet",
    schema: getWalletsData.schema(config),
    handler: getWalletsData.handler({ config, ...services }),
  };
}

function createWalletRoute({ services, config }) {
  return {
    method: "POST",
    url: BASE_URI + "/wallet",
    schema: createWallet.schema(config),
    handler: createWallet.handler({ config, ...services }),
  };
}

function createDepositRoute({ services, config }) {
  return {
    method: "POST",
    url: BASE_URI + "/deposit",
    schema: createDeposit.schema(config),
    handler: createDeposit.handler({ config, ...services }),
  };
}

function getDepositRoute({ services, config }) {
  return {
    method: "GET",
    url: BASE_URI + "/deposit/:txHash",
    schema: getDeposit.schema(config),
    handler: getDeposit.handler({ config, ...services }),
  };
}

function getWalletBalanceRoute({ services, config }) {
  return {
    method: "GET",
    url: BASE_URI + "/wallet/:address/balance",
    schema: getWalletBalance.schema(config),
    handler: getWalletBalance.handler({ config, ...services }),
  };
}

function makeExtractionRoute({ services, config }) {
  return {
    method: "POST",
    url: BASE_URI + "/extraction",
    schema: makeExtraction.schema(config),
    handler: makeExtraction.handler({ config, ...services }),
  };
}

function addBalanceRoute({ services, config }) {
  return {
    method: "PATCH",
    url: BASE_URI + "/wallet/:address/balance",
    schema: addBalance.schema(config),
    handler: addBalance.handler({ config, ...services }),
  };
}

module.exports = [
  getWalletDataRoute,
  getWalletsDataRoute,
  createWalletRoute,
  createDepositRoute,
  getDepositRoute,
  getWalletBalanceRoute,
  makeExtractionRoute,
  addBalanceRoute,
];
