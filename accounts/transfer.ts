const Web3 = require('web3');
const web3 = new Web3('https://api-ropsten.etherscan.io/api');

async function transferFunds (fromAddress: string, toAddress: string, privateKey: string, amount: number): Promise<void> {
  const tx = await web3.eth.signTransaction({
    from: fromAddress,
    gasPrice: "20000000000",
    gas: "21000",
    to: toAddress,
    value: web3.utils.toWei(amount.toString(10), 'ether'),
    data: ""
  }, privateKey);
  web3.eth.sendSignedTransaction(tx.rawTransaction, function (error, hash) {
    if (error) {
      console.log('Error sending signed transaction', error);
      return;
    }
    console.log('success!, hash:', hash);
  });
}

transferFunds('', '', '', 1);
