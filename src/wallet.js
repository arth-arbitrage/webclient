import * as Web3 from 'web3'
import { PortisProvider } from 'portis'

export const MAINNET_PROVIDER_URL = 'https://api.arth.finance/jsonrpc/v1/';
export const RINKEBY_PROVIDER_URL = 'https://rinkeby-api.arth.finance/jsonrpc/v1/';

export let web3Provider = typeof web3 !== 'undefined'
  ? window.web3.currentProvider
  : new Web3.providers.HttpProvider('https://mainnet.infura.io')

  // Replace this with Redux for more complex logic
const networkCallbacks = []
export const onNetworkUpdate = (callback) => {
  networkCallbacks.push(callback)
}

export async function connectWallet() {
    if (!window.web3) {
      web3Provider = new PortisProvider({
        // Put your Portis API key here
      })
    } else if (window.ethereum) {
      window.ethereum.enable()
    } else {
      const errorMessage = 'You need an Ethereum wallet to interact with this marketplace. Unlock your wallet, get MetaMask.io or Portis on desktop, or get Trust Wallet or Coinbase Wallet on mobile.'
      alert(errorMessage)
      throw new Error(errorMessage)
    }
    networkCallbacks.map((c) => c(web3Provider))
  }
