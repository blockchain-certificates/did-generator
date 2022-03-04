# DID POC in Blockcerts

Very rough tool to generate a secp256k1 key pair which will be used to derive
an issuing address on the provided network (testnet, bitcoin, ethereum), and store the public on an associated
DID document (ION at this moment).

## NOTES
- edit the generateIonDid.ts document to modify the issuer profile
- store the seed phrase somewhere if you want to handle less DID documents

## Commands

`npm run generate:keyPair -- --network=testnet`

This will also create the ION Did document using the ION public API.

Supported networks:
```
enum Network {
  bitcoin = 'bitcoin',
  testnet = 'testnet',
  regtest = 'regtest',
  ropsten = 'ropsten',
  ethereum = 'ethereum'
}
``` 

Defaults to `testnet`.
