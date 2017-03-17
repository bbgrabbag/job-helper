var express = require("express");
var profileRoute = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var User = require("../models/users");

profileRoute.route("/remove-user/:id")
    .delete(function (req, res) {
        User.findOneAndRemove({
            _id: req.params.id
        }, function (err, user) {
            if (err) return res.status(500).send(err);
            return res.status(200).send({
                success: true,
                statusText: user.name + " successfully deleted"
            });
        });
    });

profileRoute.route("/change-password/:id")
    .post(function (req, res) {
        User.findOne({
            _id: req.params.id
        }, function (err, user) {
            if (err) return res.status(500).send(err);
            user.password = req.body.password;
            user.save(function (err, updatedPwd) {
                if (err) return res.status(500).send(err);
                return res.status(203).send({
                    success: true,
                    statusText: "Password successfully changed"
                });
            });
        });
    });
profileRoute.route("/change-profile/:id")
    .put(function (req, res) {
        User.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        }, function (err, updatedUser) {
            if (err) return res.status(500).send(err);
            return res.status(203).send({
                success: true,
                textStatus: "User update successful",
                user: updatedUser.withoutPassword()
            });
        });
    });



module.exports = profileRoute;