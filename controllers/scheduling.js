'use strict';

exports.get = {};
exports.put = {};
exports.post = {};
exports.delete = {};

exports.get.FormatList = function (req, res) {
    res.json({
        success: true,
        items: [
            { "FirstDay": 4, "StartTime": "10:00AM", "EndTime": "11:00PM", "ScheduleStartTime": "8:00AM", "ID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "Description": "Manager Schedule" }, { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "d5894ae0-3548-44a4-a425-348179aa3166", "Description": "Schedule for Web Access" }, { "FirstDay": 4, "StartTime": "11:00AM", "EndTime": "12:00AM", "ScheduleStartTime": "6:00AM", "ID": "553f2512-d2dd-44bc-884d-9675fd3ecf81", "Description": "By Guests" }, { "FirstDay": 2, "StartTime": "10:00AM", "EndTime": "1:00AM", "ScheduleStartTime": "8:00AM", "ID": "ed800ecd-b06d-4fd6-8639-59ed2e8a599e", "Description": "Multi-Job Target Matrix" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "165ed87d-b99d-49b7-ba84-9d9924ff44a9", "Description": "AutotestSchTemplate26263809" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "8b886370-d00e-433e-ba62-512405f24f5a", "Description": "AutotestSchTemplate28404882" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "b97ceea9-4469-4f88-864a-a48e1981cdb8", "Description": "AutotestSchTemplate34009767" }, { "FirstDay": 2, "StartTime": "2:00AM", "EndTime": "11:00AM", "ScheduleStartTime": "1:00AM", "ID": "aa457596-71a6-414c-b6de-ac49f423c89c", "Description": "AutotestSchTemplate39536694" }
        ]
    });
}

exports.get.JobList = function (req, res) {
    res.json({
        success: true,
        items: [
            { "ID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Description": "Cook" }, { "ID": "908ab04a-9c8b-49a9-9577-aac7a626eecf", "Description": "Trainer FOH" }, { "ID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Description": "Salary MGR" }
        ]
    });
}

exports.get.StationList = function (req, res) {
    res.json({
        success: true,
        items: [
            { "ID": "6db572c4-b35b-4eda-b5f2-81c1c0d81929", "Description": "EXPO" }, { "ID": "c0b56a6f-fb72-4371-beb9-3600e192bd98", "Description": "PM BAR" }, { "ID": "320be1d9-97ed-43ef-8f72-81be43cfc7bd", "Description": "AM BAR" }, { "ID": "136f1fc2-1142-4a13-b954-31261161e9aa", "Description": "AM HOST" }, { "ID": "0a83a9a3-eb4d-4fff-8cbb-937253aa6f5c", "Description": "PM HOST" }, { "ID": "bb55a1b1-3f9a-44c8-b3d9-6ac9bb12c1c4", "Description": "FRY" }, { "ID": "c0496dff-55a6-4305-bff1-cd59ec741cf7", "Description": "PREP" }, { "ID": "72bbfa9f-ba55-4067-a31b-c81e16948de6", "Description": "AM CALL" }, { "ID": "5b9f6fe7-c33e-4eb3-8f59-ac9dbc26b304", "Description": "VACCUUM" }, { "ID": "4c57ca4f-e45f-4aae-9236-b0f442e074f6", "Description": "SERVER" }, { "ID": "788f32cb-fad9-4fac-9683-53392251c881", "Description": "AM HOST OPEN" }, { "ID": "86b5de3d-a458-4831-9c21-097fb5ef9e3c", "Description": "GRILL" }, { "ID": "68d7fd00-00de-406d-8b28-9854d0411600", "Description": "DISH" }, { "ID": "7b8f73f4-26da-4f1c-9ded-f9b5100d6ee6", "Description": "TO GO SPECIALIST" }, { "ID": "a5bafe94-e4b7-4649-a05a-321f5ca619cf", "Description": "BROIL" }, { "ID": "5d4a250f-6db6-0001-80dd-d9c57d135a1b", "Description": "SERVER 02" }
        ]
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
        items: [
            { "ID": "bf45e58d-4454-40a1-a68b-24d6768f18d9", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 10:00:00", "dateTo": "22/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "284e4252-7358-466b-9e88-b3c10dc8210f", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 10:00:00", "dateTo": "22/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "32066aee-f93a-4266-bc10-c2deb13f7f58", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 18:00:00", "dateTo": "22/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "02a748f8-0f1e-402e-93b7-4d4ccd78ac38", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "22/03/2018 18:00:00", "dateTo": "22/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "f0d74742-9131-4f54-b446-8cc15a3e30ee", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 10:00:00", "dateTo": "23/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ac1bafa1-d112-40d6-9b4c-6e2ff9b91a8a", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 10:00:00", "dateTo": "23/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "1e2f8ecc-88a1-4925-b290-f77a5d139282", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 18:00:00", "dateTo": "23/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "02277183-3c51-4bdf-852a-a2b28063800d", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "23/03/2018 18:00:00", "dateTo": "23/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "67a28d63-bf59-4fcf-86ed-e9fdda9f536f", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 10:00:00", "dateTo": "24/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "9c0cee4c-1929-4547-a8cd-9e3c2f367897", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 10:00:00", "dateTo": "24/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ce4865e1-0bbf-436c-b2a8-72167cdcd26a", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 18:00:00", "dateTo": "24/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "2e7553b3-f21f-4f01-b50b-38cb421a4d95", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "24/03/2018 18:00:00", "dateTo": "24/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "fc61751c-bd90-4067-83fb-668bd4ff386e", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 10:00:00", "dateTo": "25/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "ece7b7cd-5535-48f0-884b-f56ab0d5ad9f", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 10:00:00", "dateTo": "25/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "0ca91cd0-ac9f-4d69-99d4-eb7a6b27beb4", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 18:00:00", "dateTo": "25/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "c50c40f0-38cb-4e8f-9fda-fe2d702a7f14", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "25/03/2018 18:00:00", "dateTo": "25/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "6a1efc49-c446-4fbe-9498-91182c391762", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 10:00:00", "dateTo": "26/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "8ca8e212-0f41-4401-ac15-312293d9f4ac", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 10:00:00", "dateTo": "26/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "f97dabf5-8493-4f67-a529-bf9dfd78f5f2", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 18:00:00", "dateTo": "26/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "29997260-e0af-4a37-ac88-c9a5c6492803", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "26/03/2018 18:00:00", "dateTo": "26/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "760e9ec9-add8-48d7-807a-6babcf20a227", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 10:00:00", "dateTo": "27/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "3bed9b41-d0c0-4288-9fa6-fce4c0a44dcb", "EmployeeID": "a7fa4850-5aea-4bcb-9082-58886f2bd4b1", "Employee": "Eloy Lopez", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 10:00:00", "dateTo": "27/03/2018 18:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "c79cf181-6f88-467f-babb-e0704f9aee0d", "EmployeeID": "00000000-0000-0000-0000-000000000000", "Employee": null, "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "Job": "Cook", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 18:00:00", "dateTo": "27/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }, { "ID": "200ad05e-7470-4d49-932b-cd3440eee828", "EmployeeID": "3a2e4e8a-aa87-4fce-824c-6f98dd54cb93", "Employee": "ADAM KAEPPEL", "Drop": "1", "Approved": "True", "Duration": 0, "Comment": null, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "Job": "Salary MGR", "StationID": "00000000-0000-0000-0000-000000000000", "Station": null, "FormatID": "0c2cdd72-2047-4301-b0cd-e4eec9477682", "dateFrom": "27/03/2018 18:00:00", "dateTo": "27/03/2018 23:00:00", "IsDropRequest": true, "IsPickupRequest": true, "IsVolunteers": true }
        ]
    });
}

exports.get.TargetHours = function (req, res) {
    res.json({
        success: true,
        items: [
            { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/22/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/22/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/23/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/23/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/24/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/24/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/25/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/25/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/26/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/26/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 13, "BusinessDate": "3/27/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 13, "BusinessDate": "3/27/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "02df3976-1025-4dbf-ab34-970d030ebfcc", "TargetHours": 12, "BusinessDate": "3/28/2018 12:00:00 AM" }, { "UnitID": 1, "JobID": "6b9b464d-c523-4415-b6d5-f54c5fc8e248", "TargetHours": 12, "BusinessDate": "3/28/2018 12:00:00 AM" }
        ]
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
    const item = req.body;
    let dateFrom, dateTo;
    if (item) {
        let _dateFrom = new Date(item.clockin),
            _dateTo = new Date(item.clockout);
        dateFrom = _dateFrom.getDate() + '/' + (_dateFrom.getMonth() + 1) + '/' + _dateFrom.getFullYear() + ' ' + _dateFrom.getHours() + ':' + _dateFrom.getMinutes() + ':' + _dateFrom.getSeconds();
        dateTo = _dateTo.getDate() + '/' + (_dateTo.getMonth() + 1) + '/' + _dateTo.getFullYear() + ' ' + _dateTo.getHours() + ':' + _dateTo.getMinutes() + ':' + _dateTo.getSeconds();
    }
    res.json({
        success: true,
        items: [{
            Approved: "True",
            Comment: null,
            Drop: "0",
            Duration: 0,
            Employee: "",
            EmployeeID: item.employee,
            FormatID: "0c2cdd72-2047-4301-b0cd-e4eec9477682",
            ID: item.id,
            IsDropRequest: item.IsDropRequest || false,
            IsPickupRequest: false,
            IsVolunteers: false,
            Job: "Job",
            JobID: item.job,
            Station: "Station",
            StationID: item.station,
            dateFrom: dateFrom,
            dateTo: dateTo
        }]
    });
}

exports.delete.Shift = function (req, res) {
    res.json({
        success: true,
    });
}
