    const etherlime = require('etherlime-lib');

    // Path to your etherlime compiled contract json file
    const BountyContract = require('../build/BountyWallet.json'); 

    const defaultConfigs = {
        gasPrice: 20000000000,
        gasLimit: 4700000,
        chainId: 0 // Suitable for deploying on private networks like Quorum
    }

    const deploy = async (network, secret) => {
        
        const deployer = new etherlime.EtherlimeGanacheDeployer();
        const result = await deployer.deploy(BountyContract);
    }

    module.exports = { deploy }