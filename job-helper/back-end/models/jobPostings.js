var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var jobPostingSchema = new Schema({
    companyName: String,
    position: String,
    url: String,
    keywords: [String],
    datePosted: Date,
    description: String,
    recruiterInfo: {
        name: String,
        email: String,
        phone: String
        },
    references: [String],
    salary: String,
    listingStatus: {
        applied: { type: Boolean, default: false },
        responded: { type: Boolean, default: false },
        offered: Boolean,
        offerAmt: String
    },
    rating: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("JobPosting", jobPostingSchema);