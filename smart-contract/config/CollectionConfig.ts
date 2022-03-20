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
  contractName: 'Test',
  tokenName: 'Co',
  tokenSymbol: 'Co',
  hiddenMetadataUri: 'ipfs://Qmad2442zPGSp3UTEymBbyYNV8bLcWYgeWc7SoAdJwrYUG/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.2,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.2,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.0002,
    maxMintAmountPerTx: 10,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
