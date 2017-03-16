var express = require("express");
var profileRoute = express.Router();
var jwt = require("jsonwebtoken");
var config = require("../config");
var User = require("../models/users");

profileRoute.route("/:id")
    .delete(function (req, res) {
            User.findOneAndRemove({
                    _id: req.params.id,
                    user: req.user._id
                }, function (err, user) {
                    if (err) return res.status(500).send(err);
                    return res.status(200).send({
                        success: true,
                        message: "User successfully deleted"
                    });
                });
            })
.put(function (req, res) {
    User.findOne({
        _id: req.params.id
    }, function (err, user) {
        if (err) return res.status(500).send(err);
        console.log("user" + user.password);
        console.log("req body" + req.body.password + req.body.email);
        user.password = req.body.password;
        user.email = req.body.email;
        user.save(function (err, updatedUser) {
            console.log(updatedUser);
            if (err) return res.status(500).send(err);
            return res.status(204).send({
                success: true,
                user: updatedUser.withoutPassword(),
                message: "User updated successfully!"
            });
        });
    });
});




module.exports = profileRoute;