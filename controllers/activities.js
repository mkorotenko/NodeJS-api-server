'use strict';

exports.get = {};

exports.get.getList = function (req, res) {
    res.json({
        success: true,
        items: [
            { "id": "47882a81-aca1-4082-a2ac-2438647faade", "description": "Scheduling", "sortIndex": 0, "path": null, "controller": "Activities", "method": "Scheduling", "group": null, "groupSortIndex": 0, "type": null, "isFavorite": true },
            { "id": "80371df2-d9d1-4865-bd0b-5b7a479e7665", "description": "Purchasing Management", "sortIndex": 0, "path": null, "controller": "Activities", "method": "PurchaseManagement", "group": null, "groupSortIndex": 0, "type": null, "isFavorite": true },
            { "id": "51f627af-f171-4c79-a16b-5f11a3ad2e8f", "description": "Scan Assist", "sortIndex": 0, "path": null, "controller": "Activities", "method": "Scan_Assist", "group": null, "groupSortIndex": 0, "type": null, "isFavorite": true },
            { "id": "ff8496a7-c145-4506-902f-6f6eb2d0f2b9", "description": "Manager Logs", "sortIndex": 0, "path": null, "controller": "Activities", "method": "Manager_Logs", "group": null, "groupSortIndex": 0, "type": null, "isFavorite": false },
            { "id": "0c060811-822c-457e-8203-d11ae0c166cf", "description": "Inventory", "sortIndex": 0, "path": null, "controller": "Activities", "method": "Inventory", "group": null, "groupSortIndex": 0, "type": null, "isFavorite": true }
        ]
    });
};
exports.get.getInventoryList = function (req, res) {
    res.json({
        success: true,
        items: [
            {"id": "On-Hand", "description": "On-Hand", "sortIndex": 0, "path": "", "controller": "Inventory", "method": "onhand", "group": "", "groupSortIndex": 0, "type": "", "isFavorite": false},
            {"id": "Period", "description": "Period", "sortIndex": 0, "path": "", "controller": "Inventory", "method": "period", "group": "", "groupSortIndex": 0, "type": "", "isFavorite": false},
            {"id": "Daily", "description": "Daily", "sortIndex": 0, "path": "", "controller": "Inventory", "method": "daily", "group": "", "groupSortIndex": 0, "type": "", "isFavorite": false},
            {"id": "Shifts", "description": "Shifts", "sortIndex": 0, "path": "", "controller": "Inventory", "method": "shift", "group": "", "groupSortIndex": 0, "type": "", "isFavorite": false}
        ]
    });
};

//Scan Assist
exports.get['ScanAssist/ScanAssistData'] = function (req, res) {
    res.json({
        success: true,
        documents: [{ "UnitID": 1, "InvoiceHeaderID": "7aff8b25-c758-408e-b413-a75199188c49", "LocalVendorID": "1086169c-6f6b-45e6-a3ea-36042c77636c", "VendorDescription": "1st Choice Landscaping", "InvoiceNumber": "man 1756", "AccountingDate": "/Date(1503633600000)/", "InvoiceDate": "/Date(1503374400000)/", "ApprovalDate": "/Date(-62135578800000)/", "Type": "M", "ScansAmount": 2, "DLElementID": "a8268a11-2e25-4eb0-ae7d-7484673cd36a", "UserName": "1234_9999@whg", "FileLastMDate": "/Date(1503682765860)/" }, { "UnitID": 1, "InvoiceHeaderID": "b96ee06b-76cf-4eb9-927f-ef0b401fc920", "LocalVendorID": "4350b397-6430-4486-b770-4606022c504e", "VendorDescription": "A-Lanke Electric", "InvoiceNumber": "346567f", "AccountingDate": "/Date(1503633600000)/", "InvoiceDate": "/Date(1503633600000)/", "ApprovalDate": "/Date(-62135578800000)/", "Type": "C", "ScansAmount": 5, "DLElementID": "01913659-ad71-4f3a-bc55-6eef1ff559a2", "UserName": "1234_9999@whg", "FileLastMDate": "/Date(1503681917360)/" }, { "UnitID": 1, "InvoiceHeaderID": "5a598124-d11f-4041-92ee-79fea15bceed", "LocalVendorID": "1f1fc6e9-1a71-455f-9710-bd4c12a736fd", "VendorDescription": "Bread", "InvoiceNumber": "whge32", "AccountingDate": "/Date(1503633600000)/", "InvoiceDate": "/Date(1503460800000)/", "ApprovalDate": "/Date(-62135578800000)/", "Type": "C", "ScansAmount": 4, "DLElementID": "678d4947-ae35-4d7a-9fae-07065f6ad700", "UserName": "1234_9999@whg", "FileLastMDate": "/Date(1503682377680)/" }, { "UnitID": 1, "InvoiceHeaderID": "3921baeb-f2ab-4a47-a86d-5170ef63296f", "LocalVendorID": "2dcd8d2c-abbe-412b-8870-e842080d94c1", "VendorDescription": "American Welding (aka Northern)", "InvoiceNumber": "a node", "AccountingDate": "/Date(1503633600000)/", "InvoiceDate": "/Date(1503288000000)/", "ApprovalDate": "/Date(-62135578800000)/", "Type": "R", "ScansAmount": 3, "DLElementID": "f46a2991-66bf-4fd5-8fc4-d201c6643c27", "UserName": "1234_9999@whg", "FileLastMDate": "/Date(1503682888340)/" }]
    });
};
exports.get['ScanAssist/ScanAssistDoc'] = function (req, res) {
    res.json({
        success: true,
        document: {
            AccountingDate: "/Date(1503633600000)/",
            ApprovalDate: "/Date(-62135578800000)/",
            DLElementID: "01913659-ad71-4f3a-bc55-6eef1ff559a2",
            FileLastMDate: "/Date(1503681917360)/",
            InvoiceDate: "/Date(1503633600000)/",
            InvoiceHeaderID: "b96ee06b-76cf-4eb9-927f-ef0b401fc920",
            InvoiceNumber: "346567f",
            LocalVendorID: "4350b397-6430-4486-b770-4606022c504e",
            ScansAmount: 5,
            Type: "C",
            UnitID: 1,
            UserName: "1234_9999@whg",
            VendorDescription: "A-Lanke Electric"
        }
    });
};
exports.get['ScanAssist/ScanAssistFiles'] = function (req, res) {
    res.json({
        success: true,
    });
};
