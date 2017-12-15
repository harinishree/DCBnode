
//here only routing is done
'use strict';
const newRequest = require('./functions/newRequest');
const updateRequest = require('./functions/updateRequest');
const readRequest = require('./functions/readRequest');
const readIndex = require('./functions/readIndex');
const readAllRequest =require('./functions/readAllRequest');

const cors = require('cors');
const nodemailer = require('nodemailer');
var request = require('request');
var mongoose = require('mongoose');
// var image = require('./models/documents');
var dateTime = require('node-datetime');
var path = require('path');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var crypto = require('crypto');
var cfenv = require('cfenv');
var express = require('express');

module.exports = router => {
    // file upload API
    cloudinary.config({
        cloud_name: 'rapidqubedigi',
        api_key:    '247664843254646',
        api_secret: 'NNP88tw2YEBofSww9bPK7AV9Jc0'

    });
    
    //newRequest -  routes user input to function newRequest. 
    router.post("/newRequest", (req, res) => {
        console.log("Routing User Input to newRequest Function.....!")
        
        var requestid = "";
        var possible = "012345678998745612301224555285625255846197976487454187454345645432546254624566055862467679762245942418541241840415815920454";
        for (var i = 0; i < 4; i++)
        requestid += possible.charAt(Math.floor(Math.random() * possible.length));

        // var requestid = crypto.createHash('sha256').update(random_no).digest('base64');
        console.log("requestid"+requestid);
        var status = req.body.status;
        console.log("status"+status);
        var InvolvedParties = req.body.InvolvedParties;
        console.log("InvolvedParties"+InvolvedParties);
        var transactionString = JSON.stringify(req.body.transactionString);
        console.log("transactionString"+transactionString);
        if (!transactionString || !transactionString) {
            res.status(400).json({
                message: 'Invalid Request'
            });
        } else {

            newRequest.newRequest(requestid, status, InvolvedParties, transactionString)

                .then(result => {
                    res.status(result.status).json({
                        message: result.message
                        
                    })
                })

                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        }
    });

    // updateRequest -  routes user input to function updateRequest.
    router.post("/updateRequest", (req, res) => {
        console.log("Routing User Input to updateRequest Function.....!")
        
        var requestid = req.body.requestid;
        var status = req.body.status;
        var transactionString = req.body.transactionString;

        if (!transactionString || !transactionString) {
            res.status(400).json({
                message: 'Invalid Request'
            })
        } else {
            updateRequest.updateRequest(requestid, status, transactionString)

                .then(result => {
                    res.status(result.status).json({
                        message: result.message,
                    })
                })

                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        }
    });

    // readRequest - query fetches user input given by user for newRequest.
    router.get("/readRequest", (req, res) => {
        var requestList = [];
      
        if (1 == 1) {
            
            const requestid1 = checkToken(req);
            const requestid = requestid1;
            

            readRequest.readRequest(requestid)
                .then(function(result) {
                   
                     return res.json({
                        "message": result.query
                    });
                })
                .catch(err => res.status(err.status).json({
                    message: err.message
                }));
        } else {
            res.status(401).json({
                "status": false,
                 message: 'cant fetch data !'
            });
        }
    });

    // readIndex - query fetches user input given by user for newRequest.
    router.get("/readIndex",cors(), (req, res) => {
        var requestList = [];
        if (1 == 1) {

        readIndex.readIndex({
            "user": "dhananjay.p",
            "getusers": "getusers"
        })
        .then(function(result) {
               
              return res.json({
                 "status": 200,
                 "message":  result.query
             });
         })
 
         .catch(err => res.status(err.status).json({
             message: err.message
         }));
        }else {
            res.status(401).json({
                "status": false,
                message: 'cant fetch data !'
            });
        }
    });
   
    router.get('/readAllRequest',cors(),(req,res) =>{

        var requestList = [];
        if (1 == 1) {
            var startkey = parseInt('0000');
            console.log("lol----->",startkey);
            var endkey = parseInt('9999');
            console.log("lollolo------>",endkey);
        readAllRequest.readAllRequest(startkey, endkey)
        .then(function(result) {
               
              return res.json({
                 "status": 200,
                 "message":  result.query
             });
         })
 
         .catch(err => res.status(err.status).json({
             message: err.message
         }));
        }else {
            res.status(401).json({
                "status": false,
                message: 'cant fetch data !'
            });
        }




    })



    //------------------------------------ Functions ------------------------------------------ 
        
        function filterstatus(status) {
        
        if (1 == 1) {
                    
                    
            readIndex.readIndex({
                "user": "dhananjay.p",
                "getusers": "getusers"
            })
                    
            .then(function(result) {
                    
                    
            console.log("result" + result.query)
            var statusfilter = [];
                    
                    
            for (let i = 0; i < result.query.status.length; i++) {
            console.log("status" + status);
            console.log("statusledger" + result.query[i].status);
            if (result.query[i].status=== status) {
                    
            statusfilter.push(result.query[i].status);
            console.log("statusfilter" + statusfilter);
          }
                        }
            return statusfilter;
           })
                    
           .catch(err => res.status(err.status).json({
            message: err.message
           }));
                    
           } else {
               return res.status(401).json({
               message: 'cant fetch data !'
           });
                    
          }
    }
    
    function count(arr) {
        var statusname = [],
            statuscount = [],
            prev;
    
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                statusname.push(arr[i]);
                statuscount.push(1);
            } else {
                statuscount[statuscount.length - 1]++;
            }
            prev = arr[i];
        }
        console.log("statusname" + statusname);
        var result = [];
        for (var status in statusname) {
    
    
            result.push({
                statusname: statusname[status],
                statuscount: statuscount[status]
            });
        }
    
        return result;
    }

    function checkToken(req) {

        const token = req.headers['authorization'];

        if (token) {

            try {
                 (token.length!=0)
                 return token
            } catch (err) {
                return false;
            }
        } else {
            return false;
        }
    }

}


