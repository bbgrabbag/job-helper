var express = require("express");
var app = express();
var port = process.env.PORT || 8000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var path = require("path");
app.use(express.static(path.join(__dirname,"..", "front-end")));
var morgan = require("morgan");
app.use(morgan("dev"));
var mongoose = require("mongoose");
var config = require("./config");
var expressJwt = require("express-jwt");
mongoose.connect(config.database, function(err){
    if(err)throw err;
    console.log("connected!");
});

app.use("/auth", require("./routes/auth"));
app.use("/api", expressJwt({secret: config.secret}))

app.use("/api/postings", require("./routes/jobPostings"));

app.listen(port, function(){
    console.log("connected to" + " " + port);
});