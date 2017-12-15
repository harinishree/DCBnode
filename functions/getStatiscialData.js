'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.getStatisticalData = () => {
    return new Promise((resolve, reject) => {

        console.log("entering into newRequest function.....!")
            // 

        // newRequest.save()
        resolve([{
                "manid": "m001",
                "NoOfcalls": "12",
                "NoOfvisits": "5",
                "fee": "3000",
                "assets": "home"
            },
            {
                "manid": "m002",
                "NoOfcalls": "10",
                "NoOfvisits": "3",
                "fee": "4000",
                "assets": "car"

            }
        ]);



    });

}