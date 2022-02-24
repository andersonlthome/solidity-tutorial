import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xE23095A0a2dE0f645Ea7951a4684C276849E1fA0';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}