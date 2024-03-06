import Web3 from "web3";

let web3 = undefined;
let account = undefined;

export async function initWeb3() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    return true;
  } else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
    return true;
  }
  return false;
}

export function isWeb3Ready() {
  return web3 !== undefined;
}

export async function connectToBlockchain() {
  const accounts = web3.eth.accounts;
  account = accounts[0];
}

export function isConnectedToBlockchain() {
  return account !== undefined;
}

export async function getEtherBalance() {
  let balance = await web3.eth.getBalance(account);
  return web3.utils.fromWei(balance, "ether");
}

export function getConnectedAccount() {
  return account;
}
