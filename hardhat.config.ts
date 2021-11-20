import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import "@nomiclabs/hardhat-etherscan";
import { HardhatUserConfig } from "hardhat/config";
import networks from './networks';
import "./setup-env";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 40,
  },
  namedAccounts: {
    deployer: 0,
    erc721base: {
      // Mainnet: this is the erc721base logic contract deployment
      1: '0x43955024b1985E2b933A59021500aE5f55b04091',
      // Rinkeby: this is the erc721base logic contract deployment
      4: '0x93699c83B82ff9aA88b75FCAB9c11B28C1030728'
    }
  },
  networks,
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 300,
          },
        },
      },
    ],
  },
};

export default config;
