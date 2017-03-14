var express = require("express");
var postingRouter = express.Router();
var JobPosting = require("../models/jobPostings");

postingRouter.route("/")
.get(function(req,res){
    JobPosting.find({user: req.user._id},function(err, postings){
        if(err) return res.status(500).send(err);
        res.send(postings);
    });
})
.post(function(req,res){
    var newPosting = new JobPosting(req.body);
    newPosting.user = req.user;
    newPosting.save(function(err, posting){
        if(err) return res.status(500).send(err);
        res.status(201).send(posting);
    });
    
});

postingRouter.route("/:id")
.get(function(req,res){
    JobPosting.findOne({_id:req.params.id, user: req.user._id}, function(err, posting){
        if(err) return res.status(500).send(err);
        res.send(posting);
    });
})
.put(function(req,res){
    JobPosting.findOneAndUpdate({_id:req.params.id, user: req.user._id}, req.body, {new: true}, function(err, posting){
        if(err) return res.status(500).send(err);
        res.send(posting);
    });
})
.delete(function(req,res){
    JobPosting.findOneAndRemove({_id:req.params.id, user:req.user._id}, function(err, posting){
        if(err) return res.status(500).send(err, posting);
        res.send(posting.companyName + "," + " ID: " + posting._id + "," + " successfully removed!");
    });
});


module.exports = postingRouter;
