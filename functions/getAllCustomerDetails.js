'use strict';
var request = require('../models/request');
var bcSdk = require('../invoke');
var user = 'dhananjay.p';

//exports is used here so that newRequest can be exposed for router and blockchainSdk file.
exports.getAllCustomerDetails = () => {
    return new Promise((resolve, reject) => {

        console.log("entering into newRequest function.....!")
            // 

        // newRequest.save()
        resolve([{
                "custId": "001",
                "name": "umashankar",
                "dob": "16-04-1985",
                "phone": "123456789",
                "noOfVIsits": "3",
                "income": "",
                "communicationaddress": "",
                "officeAddress": "",
                "lastVisitedDate": "13-11-2016",
                "action": "called the customer",
                "outcome": "unable to fix appontment, recudeled to next week",
                "follow-up": "30-12-2017"
            },
            {
                "custId": "002",
                "name": "umashankar",
                "dob": "16-04-1985",
                "phone": "123456789",
                "noOfVIsits": "3",
                "income": "",
                "communicationaddress": "",
                "officeAddress": "",
                "lastVisitedDate": "13-11-2016",
                "action": "visited customer at home",
                "outcome": "gat information about his load requirement and few profile updates, like he as got a new car",
                "follow-up": "30-12-2017"
            }
        ]);



    });

}