import { newCoin,newSdk,Testnet } from "@nibiruchain/nibijs"
import { Msg,TxMessage } from "@nibiruchain/nibijs/dist/msg"
import { newSignerFromMnemonic } from "@nibiruchain/nibijs/dist/tx"


const ADDRESS = "nibi1aa5zn9lp8w6tt0snqq32zkgmq4nms40uantzrw"
const KEY = "glue ethics cool finger loan arm please bean carbon ripple deputy kidney also crop nephew island below blast gather circle above upgrade hill inside"

async function runExample() {
  const mnemonic = KEY
  const signer = await newSignerFromMnemonic(mnemonic)
  const sdk = await newSdk(Testnet,signer)
  const [{address:fromAddr}] = await sdk.tx.getAccounts()  
  const pair = "ubtc:unusd"
  // 合约开仓，加仓，平仓
  const msgs:TxMessage[] = [
    Msg.perp.openPosition({
      tokenPair:pair,
      baseAssetAmountLimit:0,
      leverage:1,
      quoteAssetAmount:10,
      sender:fromAddr,
      goLong:true,
    }),
    Msg.perp.addMargin({
      sender:fromAddr,
      tokenPair:pair,
      margin:newCoin("5","unusd"),
    }),
    Msg.perp.removeMargin({
      tokenPair:pair,
      sender:fromAddr,
      margin:newCoin("5","unusd")
    }),
  ]
  const txRep = await sdk.tx.signAndBroadcast(...msgs)
  console.log("txResp: %o",txRep)
  
}

runExample().then(async()=>{
  console.log("Completed!")
})