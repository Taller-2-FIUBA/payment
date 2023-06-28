const { ethers } = require("ethers");

function schema() {
  return {
    params: {
      type: "object",
      properties: {
        address: {
          type: "string",
        },
      },
    },
    required: ["address"],
  };
}

function handler({}) {
  return async function (req, reply) {
    const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_API_KEY);
    const balance = await provider.getBalance(req.params.address);
    return { balance: ethers.utils.formatEther(balance) };
  };
}

module.exports = { handler, schema };
