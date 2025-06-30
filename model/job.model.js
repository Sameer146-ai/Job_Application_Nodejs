const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true   //if any value is missing in this schema server through error by required
    },
    minExp: {
        type: Number,
        default: 0  //if any value is missing in this schema the default value is given to it.
    },
    salary: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    }
});

const jobModel = mongoose.model("jobs",jobSchema);

module.exports = jobModel;