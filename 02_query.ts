import { Testnet } from "@nibiruchain/nibijs";
import { initQueryCmd } from "@nibiruchain/nibijs/dist/query";

const ADDRESS = "nibi1aa5zn9lp8w6tt0snqq32zkgmq4nms40uantzrw"
const KEY = "glue ethics cool finger loan arm please bean carbon ripple deputy kidney also crop nephew island below blast gather circle above upgrade hill inside"

async function runExample(){
  const {client:query} = await initQueryCmd(Testnet)

  const perpParasResp = await query.perp.params()
  console.log("perpParams: ",perpParasResp)

  //地址信息
  const address = ADDRESS
  const balances = await query.bank.allBalances(address)
  console.log("balance: ",balances)

  const allPools = await query.vpool.allPools()
  console.log("allPools: %o",allPools)
}

runExample().then(async()=>{
  console.log("Completed!")
})