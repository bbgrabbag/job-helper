var express = require("express");
var authRoute = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var User = require("../models/users");

authRoute.post("/signup", function (req, res) {
    User.find({
        email: req.body.email
    }, function (err, existingUser) {
        if (err) return res.status(500).send(err);
        if (existingUser.length) return res.status(403).send({
            success: false,
            statusText: "That user already exists!"
        });
        var newUser = new User(req.body);
        newUser.save(function (err, userObj) {
            if (err) return res.status(500).send(err);
            var token = jwt.sign(userObj.toObject(), config.secret, {
                expiresIn: "24h"
            });
            res.status(200).send({
                token: token,
                user: userObj.toObject(),
                statusText: "Successfully created new user",
                success: true
            });
        });
    });
});
authRoute.post("/login", function (req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            return res.status(500).send(err)
        };
        if (!user) {
            return res.status(401).send({
                success: false,
                statusText: "User with the provided email was not found"
            });
        } else if (user) {
            user.checkPassword(req.body.password, function (err, match) {
                if (err) throw (err);
                
                if (!match) {
                    return res.status(401).send({
                        success: false,
                        statusText: "Incorrect password"
                    });
                } else {
                    var token = jwt.sign(user.toObject(), config.secret, {
                        expiresIn: "24h"
                    });
                   return res.status(200).send({
                        token: token,
                        user: user.toObject(),
                        success: true,
                        statusText: "Here's your token!"
                    });
                }
            });
        }
    });
});

module.exports = authRoute;