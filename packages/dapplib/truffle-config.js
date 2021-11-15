require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain purpose hunt opera bubble skill'; 
let testAccounts = [
"0xa650bbfd1a6ce5b8e2254799d6d9631e7ab1be4d6bebce9466f69de85e06847e",
"0x0a511255012c9a909caabc5c2cef6d00b4799cf883118925d84eef920987b564",
"0x25f2650d98005744b43db6876d1a8d61ef9996cc51c947961c99afcffec6e5ac",
"0x4f72e96fc630d8c83f9449e9342e129b372329df9aaf77771c606803f3425130",
"0xd77e8bcbd6d0f66f7e042c78f332bbab2cf55ba96476832f2e9c065a8cc52a89",
"0xfd4026c0733f237d78fd07396a040682e425d52ade768922fa0a1f42a5257dfa",
"0x51e10d938eee5f7e5e4bcd500e2520b02ab493790c26fee9f4bc351b0abf35e7",
"0x578af1704c6a32e8647fa486ee8349cbb6101ca96acd81c187cacbc607da1008",
"0xdd58c85749b405ede882bfd5c3d8e653573a7fafa0f57d99db9dfe44e21bce12",
"0x55d4b7bbef853cfa361265ed961f6a42bfb1e9f449ee345e49a63053bb2a844c"
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


