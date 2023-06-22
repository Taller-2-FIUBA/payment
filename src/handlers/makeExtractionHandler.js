function schema() {
  return {
    params: {
      type: "object",
      properties: {
        senderKey: {
          type: "string",
        },
        receiverAddress: {
          type: "string",
        },
        amountInEthers: {
          type: "string",
        },
      },
    },
    required: ["senderKey", "receiverAddress", "amountInEthers"],
  };
}

function handler({ contractInteraction, walletService }) {
  return async function (req, reply) {
    let deployerWallet = await walletService.getDeployerWallet();
    await contractInteraction.deposit(walletService.getWallet(req.body.senderKey), req.body.amountInEthers);
    await contractInteraction.extract(req.body.receiverAddress,req.body.amountInEthers, deployerWallet)
    reply.code(200).send();
  };
}


module.exports = { handler, schema };
