require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift reflect noble evil imitate private equal gather'; 
let testAccounts = [
"0x7519d827364c61d39d5a9354b3ff9742708fcb11bb882d8f52feb927455c8cd4",
"0x13c8ad62f657bbde1d910226ed2bb6119c10936f5ffc50827967fc2f2fb0de67",
"0x606e2372f525b36fc4fd0a399eff786fc0556aaed82d0a6f5291d8b06396f568",
"0x4f1c9f136a3d53298962b525061c9610184130ea4973c5c20795de19813b586b",
"0x06d43678711e5beead9f28ecab81faaab25c79dcca3d703a5ff93a496769b064",
"0x959cff30f5da88b9de5c248e81a404a71172d0ad6be9d62c81e1d4b3d9d01189",
"0xfd4088eccc89de3fd1c815aeffb81a40fd84f1047ef4f9c1c68812cdd738f026",
"0x1266ac1ea0c51397932c86408e734e4efd8f7b912510a31c2cd8a9ce038127e6",
"0x9cd35e7bcad950602b12ca400a48f10bf05f46b33bbd56a2418b1bcae711eca7",
"0x7d944fbd744562be8561d697314d05209ed82c3fb04fe62ce362af95071742c1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


