'use strict';

exports.get = {};

exports.get.getHomeDashboardID = function (req, res) {
    res.json({
        success: true,
        id: "5c52ef82-f66b-4aa8-b2dd-bb0eccdc9469"
    });
};
exports.get.getReportInfo = function (req, res) {
    res.json({
        reportInfo: {
            ReportName: "Forecasting Schedule Excel (MU)", 
            ReportId: "755e6ff6-a3e4-40fd-841e-520a8ce1fa55",
            CalendarId: "53393d5a-3940-4a1f-9f50-858551c89411"
        },
        success: true
    });
};
exports.get.getReportParameters = function (req, res) {
    res.json({
        reportInfo: { "ReportName": "POS Sales - Advanced DC Portal Grid", "RepoParams": [{ "Name": "@FromDate", "Description": "Date From", "DisplayValue": "07/02/2014", "Value": "02/07/2014", "Number": 2, "ParmTypeID": "FromDate", "ParmDestination": "B", "UseDisplayAsData": "N", "ValueFilter": null, "UseDefault": "N", "ShowInReport": "Y" }, { "Name": "@ThruDate", "Description": "Date Thru", "DisplayValue": "07/02/2014", "Value": "02/07/2014", "Number": 3, "ParmTypeID": "ThruDate", "ParmDestination": "B", "UseDisplayAsData": "N", "ValueFilter": null, "UseDefault": "N", "ShowInReport": "Y" }, { "Name": "@UnitID", "Description": "Unit", "DisplayValue": "All Units", "Value": null, "Number": 5, "ParmTypeID": "UnitID", "ParmDestination": "B", "UseDisplayAsData": "N", "ValueFilter": null, "UseDefault": "N", "ShowInReport": "Y" }, { "Name": "@GroupID", "Description": "Unit Group", "DisplayValue": "All Groups", "Value": null, "Number": 6, "ParmTypeID": "UnitGroupID", "ParmDestination": "B", "UseDisplayAsData": "N", "ValueFilter": null, "UseDefault": "N", "ShowInReport": "Y" }], "AskForParams": true, "ReportId": "8b4aa597-3213-4f1b-8979-29c91755b3c7", "CalendarId": "53393d5a-3940-4a1f-9f50-858551c89411" },
        success: true
    });
};
exports.get.Dashboard = function (req, res) {
    res.json({
        success: true
    });
};