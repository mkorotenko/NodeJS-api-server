'use strict';

var glob = require("glob");
var fs = require("fs");

exports.get = {};
exports.post = {};

let brink = {};
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.Deposit = '../data/Brink.Deposit.json';
// brink.Discounts = '../data/Brink.Discounts.json';
// brink.Employee = '../data/Brink.Employee.json';
// brink.FutureOrderDeposit = '../data/Brink.FutureOrderDeposit.json';
// brink.Item = '../data/Brink.Item.json';
// brink.Modifier = '../data/Brink.Modifier.json';
// brink.Order = '../data/Brink.Order.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
// brink.DayParts = '../data/Brink.DayParts.json';
const reg = new RegExp('(data/Brink.)(.*)(.json)');
glob("data/*.json", function(err, files) { // read the folder or folders if you want: example json/**/*.json

    if(err) {
      console.log("cannot read the folder, something goes wrong with glob", err);
    }
    else {
        files.forEach(fileName => {
            let fParts = fileName.match(reg);
            if (fParts.length)
                brink[fParts[2]] = '../' + fileName;
            else
                console.error('Data file not found', fileName);
        })
    }

    for (let route in brink) {
        exports.get[route] = function (req, res) {
            res.json(require(brink[route]));
        };
    }
    
});
