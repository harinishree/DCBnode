'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.getNotification = () => {
    return new Promise((resolve, reject) => {

        console.log("entering into newRequest function.....!")
            // 

        // newRequest.save()
        resolve([{
                "custId": "C001",
                "notificationDate": "01-01-2018",
                "notificationTime": "10am",
                "callback": "Birthday",
                "expired": false
            },
            {
                "custId": "C001",
                "notificationDate": "01-01-2018",
                "notificationTime": "10am",
                "callback": "Birthday",
                "expired": false
            },
        ]);



    });

}