import { useFaucet } from "@nibiruchain/nibijs";
import { newRandomWallet, WalletHD } from "@nibiruchain/nibijs/dist/tx";

async function runExample() {
  const wallet: WalletHD = await newRandomWallet()
  const [{address}] = await wallet.getAccounts()

  console.log("memonic: " ,wallet.mnemonic)
  console.log("address: " ,address)

  await useFaucet(address)
}

runExample().then(()=>{
  console.log("Complete!")
})
