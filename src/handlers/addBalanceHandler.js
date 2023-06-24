const {ethers} = require("ethers");

function schema() {
  return {
    params: {
      type: "object",
      properties: {
        address: {
          type: "string"
        }
      },
    },
    required: ["address"],
  };
}

function handler({contractInteraction, walletService}) {
  return async function (req, reply) {
    let deployerWallet = await walletService.getDeployerWallet();
    await contractInteraction.payout(walletService.getWallet(req.body.receiverKey),req.body.amountInEthers, deployerWallet)
    reply.code(200).send();
  };
}

module.exports = { handler, schema };
