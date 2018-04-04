'use strict';

exports.get = {};
exports.post = {};

let Login = function (req, res) {
    res.json({
        success: true,
        sessID: "yn4scf1mw3qr2nlthkv3eulh",
        returnUrl: null
    });
};
exports.get.Login = Login;
exports.post.Login = Login;

let Logout = function (req, res) {
    res.json({
        success: true
    });
};
exports.get.Logout = Logout;
exports.post.Logout = Logout;

exports.get.IsLoggedIn = function (req, res) {
    res.json({
        isLogged: true,
        noticeDay: 'noticeDay != null && noticeDay.Value != null ? noticeDay.Value.ToString("MM/dd/yyyy") : string.Empty'
    });
};
