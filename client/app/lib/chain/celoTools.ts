import { stableTokenABI } from "@celo/abis"
import { createPublicClient, formatEther, getContract, http } from "viem"
import { celo } from "viem/chains"

const STABLE_TOKEN_ADDRESS = "0x765DE816845861e75A25fCA122bb6898B8B1282a"

export class CeloTools {
  async checkCUSDBalance(publicClient: string, address: string) {
    let StableTokenContract = getContract({
      abi: stableTokenABI,
      address: STABLE_TOKEN_ADDRESS,
      publicClient,
    })

    let balanceInBigNumber = await StableTokenContract.read.balanceOf([address])

    let balanceInWei = balanceInBigNumber.toString()

    let balanceInEthers = formatEther(balanceInWei)

    return balanceInEthers
  }

  createPublicClient() {
    return createPublicClient({
      chain: celo,
      transport: http(),
    }) // Mainnet
  }

  async checkIfTransactionSucceeded(publicClient: any, transactionHash: any) {
    let receipt = await publicClient.getTransactionReceipt({
      hash: transactionHash,
    })

    return receipt.status === "success"
  }

  async estimateGas_cUsd(
    publicClient: any,
    transaction: any,
    feeCurrency = ""
  ) {
    return await publicClient.estimateGas({
      ...transaction,
      feeCurrency: feeCurrency ? feeCurrency : "",
    })
  }

  async estimateGasPrice_celo(publicClient: any, feeCurrency = "") {
    return await publicClient.request({
      method: "eth_gasPrice",
      params: feeCurrency ? [feeCurrency] : [],
    })
  }
}
// let balance = await checkCUSDBalance(publicClient, address); // In Ether unit

// let gasLimit = await estimateGas(publicClient, {
//   account: "0x8eb02597d85abc268bc4769e06a0d4cc603ab05f",
//   to: "0x4f93fa058b03953c851efaa2e4fc5c34afdfab84",
//   value: "0x1",
//   data: "0x",
// })
