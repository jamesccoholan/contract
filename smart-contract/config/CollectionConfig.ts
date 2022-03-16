import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  //yarn deploy --network truffle 
  //yarn verify 0x5c7CB58301ab19469658ffEe222b91910Cde65cD --network truffle
  contractName: 'Bull',
  tokenName: 'JC',
  tokenSymbol: 'JC',
  hiddenMetadataUri: 'ipfs://QmfGar4cCFVqvbeM1saoQrNG3fJRjyuLwgGQStfryuCMYf/hidden.json',
  maxSupply: 1000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.01,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 1000,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
