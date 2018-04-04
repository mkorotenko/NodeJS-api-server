'use strict';

exports.get = {};
exports.put = {};
exports.post = {};
exports.delete = {};

exports.get.FormatList = function (req, res) {
    res.json({
        success: true,
        items: [{ "FirstDay": 4, "StartTime": "10:00AM", "EndTime": "11:00PM", "ScheduleStartTime": "8:00AM", "ID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "Description": "Manager Schedule" }, { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "d5894ae0-3548-44a4-a425-348179aa3166", "Description": "Schedule for Web Access" }, { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "553f2512-d2dd-44bc-884d-9675fd3ecf81", "Description": "By Guests" }, { "FirstDay": 2, "StartTime": "10:00AM", "EndTime": "1:00AM", "ScheduleStartTime": "8:00AM", "ID": "ed800ecd-b06d-4fd6-8639-59ed2e8a599e", "Description": "Multi-Job Target Matrix" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "165ed87d-b99d-49b7-ba84-9d9924ff44a9", "Description": "AutotestSchTemplate26263809" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "8b886370-d00e-433e-ba62-512405f24f5a", "Description": "AutotestSchTemplate28404882" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "b97ceea9-4469-4f88-864a-a48e1981cdb8", "Description": "AutotestSchTemplate34009767" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "aa457596-71a6-414c-b6de-ac49f423c89c", "Description": "AutotestSchTemplate39536694" }]
    });
}

exports.get.JobList = function (req, res) {
    res.json({
        success: true,
        items: [{ "ID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Description": "Cook" }, { "ID": "908ab04a-9c8b-49a9-9577-aac7a626eecf", "Description": "Trainer FOH" }, { "ID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Description": "Salary MGR" }]
    });
}

exports.get.StationList = function (req, res) {
    res.json({
        success: true,
        items: [{ "ID": "6db572c4-b35b-4eda-b5f2-81c1c0d81929", "Description": "EXPO" }, { "ID": "c0b56a6f-fb72-4371-beb9-3600e192bd98", "Description": "PM BAR" }, { "ID": "320be1d9-97ed-43ef-8f72-81be43cfc7bd", "Description": "AM BAR" }, { "ID": "136f1fc2-1142-4a13-b954-31261161e9aa", "Description": "AM HOST" }, { "ID": "0a83a9a3-eb4d-4fff-8cbb-937253aa6f5c", "Description": "PM HOST" }, { "ID": "bb55a1b1-3f9a-44c8-b3d9-6ac9bb12c1c4", "Description": "FRY" }, { "ID": "c0496dff-55a6-4305-bff1-cd59ec741cf7", "Description": "PREP" }, { "ID": "72bbfa9f-ba55-4067-a31b-c81e16948de6", "Description": "AM CALL" }, { "ID": "5b9f6fe7-c33e-4eb3-8f59-ac9dbc26b304", "Description": "VACCUUM" }, { "ID": "4c57ca4f-e45f-4aae-9236-b0f442e074f6", "Description": "SERVER" }, { "ID": "788f32cb-fad9-4fac-9683-53392251c881", "Description": "AM HOST OPEN" }, { "ID": "86b5de3d-a458-4831-9c21-097fb5ef9e3c", "Description": "GRILL" }, { "ID": "68d7fd00-00de-406d-8b28-9854d0411600", "Description": "DISH" }, { "ID": "7b8f73f4-26da-4f1c-9ded-f9b5100d6ee6", "Description": "TO GO SPECIALIST" }, { "ID": "a5bafe94-e4b7-4649-a05a-321f5ca619cf", "Description": "BROIL" }, { "ID": "5d4a250f-6db6-0001-80dd-d9c57d135a1b", "Description": "SERVER 02" }]
    });
}

exports.get.VolunteerList = function (req, res) {
    res.json({
        success: true,
        items: []
    });
}

exports.get.Shift = function (req, res) {
    res.json({
        success: true,
        items: [{ "ID": "bf45e58d-4454-40a1-a68b-24d6768f18d9", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 10:00:00", "dateTo": "22/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "284e4252-7358-466b-9e88-b3c10dc8210f", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 10:00:00", "dateTo": "22/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "32066aee-f93a-4266-bc10-c2deb13f7f58", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 18:00:00", "dateTo": "22/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "02a748f8-0f1e-402e-93b7-4d4ccd78ac38", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 18:00:00", "dateTo": "22/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "f0d74742-9131-4f54-b446-8cc15a3e30ee", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 10:00:00", "dateTo": "23/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ac1bafa1-d112-40d6-9b4c-6e2ff9b91a8a", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 10:00:00", "dateTo": "23/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "1e2f8ecc-88a1-4925-b290-f77a5d139282", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 18:00:00", "dateTo": "23/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "02277183-3c51-4bdf-852a-a2b28063800d", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 18:00:00", "dateTo": "23/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "67a28d63-bf59-4fcf-86ed-e9fdda9f536f", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 10:00:00", "dateTo": "24/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "9c0cee4c-1929-4547-a8cd-9e3c2f367897", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 10:00:00", "dateTo": "24/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ce4865e1-0bbf-436c-b2a8-72167cdcd26a", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 18:00:00", "dateTo": "24/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "2e7553b3-f21f-4f01-b50b-38cb421a4d95", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 18:00:00", "dateTo": "24/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "fc61751c-bd90-4067-83fb-668bd4ff386e", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 10:00:00", "dateTo": "25/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ece7b7cd-5535-48f0-884b-f56ab0d5ad9f", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 10:00:00", "dateTo": "25/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "0ca91cd0-ac9f-4d69-99d4-eb7a6b27beb4", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 18:00:00", "dateTo": "25/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "c50c40f0-38cb-4e8f-9fda-fe2d702a7f14", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 18:00:00", "dateTo": "25/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "6a1efc49-c446-4fbe-9498-91182c391762", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 10:00:00", "dateTo": "26/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "8ca8e212-0f41-4401-ac15-312293d9f4ac", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 10:00:00", "dateTo": "26/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "f97dabf5-8493-4f67-a529-bf9dfd78f5f2", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 18:00:00", "dateTo": "26/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "29997260-e0af-4a37-ac88-c9a5c6492803", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 18:00:00", "dateTo": "26/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "760e9ec9-add8-48d7-807a-6babcf20a227", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 10:00:00", "dateTo": "27/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "3bed9b41-d0c0-4288-9fa6-fce4c0a44dcb", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 10:00:00", "dateTo": "27/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "c79cf181-6f88-467f-babb-e0704f9aee0d", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 18:00:00", "dateTo": "27/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "200ad05e-7470-4d49-932b-cd3440eee828", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 18:00:00", "dateTo": "27/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }]
    });
}

exports.get.TargetHours = function (req, res) {
    res.json({
        success: true,
        items: [{ "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/22/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/22/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/23/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/23/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/24/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/24/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/25/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/25/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/26/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/26/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/27/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/27/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 12, "BusinessDate": "3/28/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 12, "BusinessDate": "3/28/2018 12:00:00 AM" }]
    });
}

exports.get.CheckSheduleExists = function (req, res) {
    res.json({
        success: true,
        sheduleExists: true
    });
}

exports.post.NewSchedule = function (req, res) {
    res.json({
        success: true,
    });
}

exports.post.Shift = function (req, res) {
    res.json({
        success: true,
        items: [{ "ID": "1e2f8ecc-88a1-4925-b290-f77a5d139282", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "0a83a9a3-eb4d-4fff-8cbb-937253aa6f5c", "Station": "PM HOST", "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 18:00:00", "dateTo": "23/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }]
    });
}

exports.delete.Shift = function (req, res) {
    res.json({
        success: true,
    });
}

//exports.get.GetShiftedTimes = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "ID": "10dd6fa5-ef14-4ba0-9dfc-8e6fe7bd389d1", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": null, "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "32c637a1-26a7-4351-a29f-351e8cbbe2a6", "Job": "Bar", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/26/2017 9:01:00 AM", "dateTo": "8/26/2017 4:00:00 PM" },
//            { "ID": "10dd6fa5-ef14-4ba0-9dfc-8e6fe7bd389d2", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": null, "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/26/2017 9:32:00 AM", "dateTo": "8/26/2017 4:30:00 PM" },
//            { "ID": "10dd6fa5-ef14-4ba0-9dfc-8e6fe7bd389d4", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": 'He\'s cool guy!', "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/27/2017 7:03:00 AM", "dateTo": "8/27/2017 4:30:00 PM" },
//            { "ID": "10dd6fa5-ef14-4ba0-9dfc-8e6fe7bd389d", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": null, "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "32c637a1-26a7-4351-a29f-351e8cbbe2a6", "Job": "Bar", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/30/2017 8:34:00 AM", "dateTo": "8/30/2017 3:30:00 PM" },
//            { "ID": "199a4750-c34b-4c1e-ba61-250b9b1f0e39", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "0", "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "32c637a1-26a7-4351-a29f-351e8cbbe2a6", "Job": "Bar", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/1/2017 11:05:00 AM", "dateTo": "9/1/2017 6:00:00 PM" },
//            { "ID": "e41895a1-2f27-4b96-9a48-8e39522e6b11", "EmployeeID": "cf695686-e369-4c65-8d64-dd0108efdef4", "Employee": "Julio Lopez", "Drop": "1", "IsDropRequest": true, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "32c637a1-26a7-4351-a29f-351e8cbbe2a6", "Job": "Bar", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/30/2017 8:15:00 AM", "dateTo": "8/30/2017 3:15:00 PM" },
//            { "ID": "bbf7bf80-960c-4666-af7b-42aa3d39207e", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/30/2017 11:00:00 AM", "dateTo": "8/30/2017 7:00:00 PM" },
//            { "ID": "e4b04c1b-c512-4d08-9369-50ddb40ab22a", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/30/2017 7:00:00 PM", "dateTo": "8/30/2017 11:00:00 PM" },
//            { "ID": "49ebb501-b455-4d34-9c33-8981cecbd770", "EmployeeID": "49e23772-f506-48a4-b297-43e48825ecbe", "Employee": "Leonardo Lopez", "Drop": null, "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "0d98957b-5d24-4326-b501-bc207fda656a", "Job": "Server", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/31/2017 8:00:00 AM", "dateTo": "8/31/2017 3:00:00 PM" },
//            { "ID": "378c2c35-8872-4f27-aef9-86b8b0bf69e3", "EmployeeID": "cf695686-e369-4c65-8d64-dd0108efdef4", "Employee": "Julio Lopez", "Drop": "1", "IsDropRequest": true, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/31/2017 9:34:00 AM", "dateTo": "8/31/2017 4:34:00 PM" },
//            { "ID": "daec0b94-e29b-4183-90b6-47259a63d577", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/31/2017 10:00:00 AM", "dateTo": "8/31/2017 6:00:00 PM" }, { "ID": "ecd0db77-241f-4e86-90b4-de85c57b04d2", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "8/31/2017 6:00:00 PM", "dateTo": "8/31/2017 11:00:00 PM" }, { "ID": "dd002fde-ab37-48fa-b2b8-c9f1ea6db2ac", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/1/2017 10:00:00 AM", "dateTo": "9/1/2017 6:00:00 PM" },
//            { "ID": "337205a2-33c4-4ee3-94fb-19925cd93000", "EmployeeID": "cf695686-e369-4c65-8d64-dd0108efdef4", "Employee": "Julio Lopez", "Drop": null, "IsDropRequest": false, "IsPickupRequest": false, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/1/2017 2:00:00 PM", "dateTo": "9/1/2017 9:00:00 PM" }, { "ID": "ec4e9227-aae9-44ca-a129-a36145cee8e0", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/1/2017 6:00:00 PM", "dateTo": "9/1/2017 11:00:00 PM" }, { "ID": "ac4a0b83-5682-44be-bd02-93e6b86991da", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/2/2017 10:00:00 AM", "dateTo": "9/2/2017 6:00:00 PM" }, { "ID": "46c3edeb-c796-4a7e-aa7b-ddff0b426f89", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/2/2017 6:00:00 PM", "dateTo": "9/2/2017 11:00:00 PM" }, { "ID": "72a6cae5-1d22-47b4-abb5-ab14ecd8f27b", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/3/2017 10:00:00 AM", "dateTo": "9/3/2017 6:00:00 PM" }, { "ID": "fd8e3a1b-5c5b-4811-84eb-704e9723819a", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/3/2017 6:00:00 PM", "dateTo": "9/3/2017 11:00:00 PM" }, { "ID": "e5198b35-26d6-4323-900a-2bc650a731cd", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/4/2017 10:00:00 AM", "dateTo": "9/4/2017 6:00:00 PM" }, { "ID": "4e38ec92-88ca-46a8-a2cb-b1bb4a029274", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/4/2017 6:00:00 PM", "dateTo": "9/4/2017 11:00:00 PM" }, { "ID": "a9533027-70bb-4229-ba4f-76021cd83963", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/5/2017 10:00:00 AM", "dateTo": "9/5/2017 6:00:00 PM" }, { "ID": "2d821952-4dfb-4817-8438-6ceeddb603b9", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": false, "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "dateFrom": "9/5/2017 6:00:00 PM", "dateTo": "9/5/2017 11:00:00 PM" }
//        ]
//    });
//}


//exports.get.GetVolunteers = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "ID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "FirstName": "Eloy", "LastName": "Lopez", "IsQualifiedVolunteer": false, "pickup": true },
//            { "ID": "389f1402-de3d-4287-8c02-138ada387f09", "FirstName": "AM EMP", "LastName": "AM EMP MEAL", "IsQualifiedVolunteer": false, "pickup": false },
//            { "ID": "99121ab8-5479-4630-a30e-da7d17bdbbaf", "FirstName": "TRAINING CARD", "LastName": "", "IsQualifiedVolunteer": false, "pickup": true },
//            { "ID": "f246b0f5-88f1-4937-9497-1975b0206582", "FirstName": "AM BAR", "LastName": "AM BAR", "IsQualifiedVolunteer": false, "pickup": true },
//            { "ID": "fdff8c4f-1567-4859-9f78-22d321712671", "FirstName": "KARLA S", "LastName": "", "IsQualifiedVolunteer": false, "IsQualifiedVolunteer": false }
//        ]
//    });
//}

//exports.get.GetEmployees = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "ID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "FirstName": "Eloy", "LastName": "Lopez", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false },
//            { "ID": "389f1402-de3d-4287-8c02-138ada387f09", "FirstName": "AM EMP", "LastName": "AM EMP MEAL", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false },
//            { "ID": "99121ab8-5479-4630-a30e-da7d17bdbbaf", "FirstName": "TRAINING CARD", "LastName": "", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "f246b0f5-88f1-4937-9497-1975b0206582", "FirstName": "AM BAR", "LastName": "AM BAR", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "fdff8c4f-1567-4859-9f78-22d321712671", "FirstName": "KARLA S", "LastName": "", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "0523437e-0e09-417a-9c9a-45108cc06216", "FirstName": "PM BAR", "LastName": "", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "8c015250-8e73-4823-ba7f-5d9716ff4ef7", "FirstName": "PM CARSIDE", "LastName": "", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "8ed5c447-c2ff-499e-aeb4-cc972d3a3781", "FirstName": "TO GO", "LastName": "TO GO", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "c090cbb9-1e83-43f6-a09b-28537b8c650f", "FirstName": "Bar TOGO", "LastName": "Bar TOGO", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "e5d3c042-2add-4d58-a274-0f7e210ba93e", "FirstName": "SATURNINO", "LastName": "MORALES", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "566585b7-d942-4e70-8991-0cd9669f69b5", "FirstName": "ABBEY", "LastName": "BRYANT", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "653d5e62-5018-483a-b726-b6a6a245608b", "FirstName": "JANEL", "LastName": "BURKHARDT", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "6d16075c-3a80-4c68-9fe1-857c67aae883", "FirstName": "RACHEL", "LastName": "HOWELL", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "66a84fdd-f22a-489e-9be6-0c9f7d4e28e3", "FirstName": "BILL", "LastName": "PERRINE", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "b6e9528e-6f40-4f72-887d-aa7e0898477d", "FirstName": "STACEY", "LastName": "CHOLIP", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "af1f6a4e-55bb-4002-bbe7-164b24931df9", "FirstName": "KELLY", "LastName": "KRUEGER", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "d3239431-bdbf-42ce-936d-bd40060356d8", "FirstName": "KIM", "LastName": "O\u0027BRIEN", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "b1a147c6-72e5-42c4-b9b2-443c5b6f2327", "FirstName": "DABRAVKO", "LastName": "ZAJA", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "6a725489-a6ab-46bd-8020-17be08b3da34", "FirstName": "KELLEY", "LastName": "PROCTOR", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "3568f986-736b-4d5c-a015-b5b1488fe401", "FirstName": "Angelo", "LastName": "Murley", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }, { "ID": "0b40e920-e4c8-44d1-83fd-56781893ea3c", "FirstName": "ZACHARY", "LastName": "COLE", "IsQualified": false, "IsVolunteer": false, "IsQualifiedVolunteer": false }
//        ]
//    });
//}

//exports.get.GetFormatList = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "FirstDay": 4, "StartTime": "10:00AM", "EndTime": "11:00PM", "ScheduleStartTime": "8:00AM", "ID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "Description": "Manager Schedule" },
//            { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "d5894ae0-3548-44a4-a425-348179aa3166", "Description": "Schedule for Web Access" },
//            { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "553f2512-d2dd-44bc-884d-9675fd3ecf81", "Description": "By Guests" },
//            { "FirstDay": 2, "StartTime": "10:00AM", "EndTime": "1:00AM", "ScheduleStartTime": "8:00AM", "ID": "ed800ecd-b06d-4fd6-8639-59ed2e8a599e", "Description": "Multi-Job Target Matrix" },
//            { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "165ed87d-b99d-49b7-ba84-9d9924ff44a9", "Description": "AutotestSchTemplate26263809" },
//            { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "8b886370-d00e-433e-ba62-512405f24f5a", "Description": "AutotestSchTemplate28404882" },
//            { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "b97ceea9-4469-4f88-864a-a48e1981cdb8", "Description": "AutotestSchTemplate34009767" },
//            { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "aa457596-71a6-414c-b6de-ac49f423c89c", "Description": "AutotestSchTemplate39536694" }
//        ]
//    });
//}

//exports.get.GetJobList = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "ID": "32c637a1-26a7-4351-a29f-351e8cbbe2a6", "Description": "Bar" },
//            { "ID": "1cb1113d-c2ad-4feb-ad43-5f594d222b44", "Description": "BOH" },
//            { "ID": "5f156579-1a31-4a21-8822-7b1d116a17c7", "Description": "Host" },
//            { "ID": "5a849d27-6b8e-4c9d-8e52-7cc2d770e412", "Description": "ToGo" },
//            { "ID": "908ab04a-9c8b-49a9-9577-aac7a626eecf", "Description": "Trainer FOH" },
//            { "ID": "0d98957b-5d24-4326-b501-bc207fda656a", "Description": "Server" },
//            { "ID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Description": "Salary MGR" }
//        ]
//    });
//}

//exports.get.GetStationList = function (req, res) {
//    res.json({
//        success: true,
//        items: [
//            { "ID": "6db572c4-b35b-4eda-b5f2-81c1c0d81929", "Description": "EXPO" },
//            { "ID": "c0b56a6f-fb72-4371-beb9-3600e192bd98", "Description": "PM BAR" },
//            { "ID": "320be1d9-97ed-43ef-8f72-81be43cfc7bd", "Description": "AM BAR" },
//            { "ID": "136f1fc2-1142-4a13-b954-31261161e9aa", "Description": "AM HOST" },
//            { "ID": "0a83a9a3-eb4d-4fff-8cbb-937253aa6f5c", "Description": "PM HOST" },
//            { "ID": "bb55a1b1-3f9a-44c8-b3d9-6ac9bb12c1c4", "Description": "FRY" },
//            { "ID": "c0496dff-55a6-4305-bff1-cd59ec741cf7", "Description": "PREP" },
//            { "ID": "72bbfa9f-ba55-4067-a31b-c81e16948de6", "Description": "AM CALL" },
//            { "ID": "5b9f6fe7-c33e-4eb3-8f59-ac9dbc26b304", "Description": "VACCUUM" },
//            { "ID": "4c57ca4f-e45f-4aae-9236-b0f442e074f6", "Description": "SERVER" },
//            { "ID": "788f32cb-fad9-4fac-9683-53392251c881", "Description": "AM HOST OPEN" },
//            { "ID": "86b5de3d-a458-4831-9c21-097fb5ef9e3c", "Description": "GRILL" },
//            { "ID": "68d7fd00-00de-406d-8b28-9854d0411600", "Description": "DISH" },
//            { "ID": "7b8f73f4-26da-4f1c-9ded-f9b5100d6ee6", "Description": "TO GO SPECIALIST" },
//            { "ID": "a5bafe94-e4b7-4649-a05a-321f5ca619cf", "Description": "BROIL" },
//            { "ID": "5d4a250f-6db6-0001-80dd-d9c57d135a1b", "Description": "SERVER 02" }
//        ]
//    });
//}

//exports.put.PutEmployeeShift = function (req, res) {
//    res.json({
//        success: true,
//    });
//}

//exports.post.GenerateSchedule = function (req, res) {
//    res.json({
//        success: true,
//    });
//}

//exports.get.GetTotalHoursForJobs = function (req, res) {
//    res.json({
//        success: true,

//        //authRequired: true,
//        items: [
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '8/31/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '9/1/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '9/2/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '9/3/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '9/4/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 13,
//                BusinessDate: '9/5/2017 12:00:00 AM'
//            },
//            {
//                UnitID: 1,
//                JobID: '02df3976-1025-4dbf-ab34-970d030ebfcc',
//                TargetHours: 12,
//                BusinessDate: '9/6/2017 12:00:00 AM'
//            },
//        ]
//    });
//}