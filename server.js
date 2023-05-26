// // var web3HttpProvider = require('web3-providers-http');
var Web3 = require('web3');
// // var web3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');


 //var Eth = require('web3-eth');

// var eth = new Eth(Eth.providers.givenProvider || 'http://localhost:7545');


// var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider ||'http://localhost:7545');
// //web3.eth.getAccounts().then(console.log);
 


// web3.eth.getChainId()
//     .then(console.log);

//     web3.eth.getNodeInfo()
//     .then(console.log);

// web3.eth.getProof()
//     .then(console.log);

// // var options = {
// //     keepAlive: true,
// //     withCredentials: false,
// //     timeout: 20000, // ms
// //     headers: [
// //         {
// //             name: 'Access-Control-Allow-Origin',
// //             value: '*'
// //         },
// //         {
// //             ...web3HttpProvider
// //         }
// //     ],
// //     agent: {
// //         http: http.Agent(...web3HttpProvider),
// //         baseUrl: ''
// //     }
// // };

var subscription = web3.eth.subscribe('syncing', function(error, sync){
    if (!error)
        console.log(sync);
})
.on("data", function(sync){
    // show some syncing stats
})
.on("changed", function(isSyncing){
    if(isSyncing) {
        // stop app operation
    } else {
        // regain app operation
    }
});

// unsubscribes the subscription
subscription.unsubscribe(function(error, success){
    if(success)
        console.log('Successfully unsubscribed!');
});
