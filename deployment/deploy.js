const etherlime = require('etherlime-lib');

    // Path to your etherlime compiled contract json file
    const TestContract = require('../build/BountyWallet.json'); 

    const deploy = async (network, secret) => {

        const deployer = new etherlime.EtherlimeGanacheDeployer();

        // Add params separated with ,
        const result = await deployer.deploy(TestContract, {});
    }

    module.exports = { deploy }