import { MetaMaskInpageProvider } from "@metamask/providers"
import { BrowserProvider, Contract, parseEther } from "ethers"

import { contractAbi, contractAddress } from "./abi"

// declare global {
//   interface Window {
//     ethereum?: MetaMaskInpageProvider
//   }
// }

export class SmartContract {
  abi = contractAbi
  contractAddress = contractAddress
  static gasLimit = parseInt("600000")

  async getContract(): Promise<Contract | undefined> {
    if (!window.ethereum) return

    let accounts: any = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    let userAddress = accounts[0]

    const provider = new BrowserProvider(window.ethereum)
    const signer = await provider.getSigner(userAddress)
    const contract = new Contract(contractAddress, contractAbi, signer)

    return contract
  }

  async payInvoice(invoiceOwner: string, amount: number, invoiceId: string) {
    const amountToSend = parseEther(amount.toString())
    try {
      const contract = await this.getContract()

      if (!contract) throw new Error("Contract not found")

      let tx = await contract.payInvoice(invoiceOwner, amountToSend, invoiceId)

      await tx.wait()
    } catch (error) {}
  }
}
