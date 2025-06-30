const jobModel = require("../model/job.model");
// console.log(jobModel);
const createjob = async (req, res) => {
    await jobModel.create(req.body);
    res.json({
        message: "hello from create job",
        result: true,
    });
};

const listjob = async (req, res) => {
    const jobs =  await jobModel.find();
    res.json({
        message: "hello from list items",
        result: true,
        jobsList : jobs
    });
};

const editjob = (req, res) => {
    res.json({
        message: "hello from edited items",
        result: true, // ✅ corrected here
    });
};

const deletejob = (req, res) => {
    res.json({
        message: "hello from deleted items",
        result: true,
    });
};

const jobController = {
    createjob,
    editjob,
    listjob,
    deletejob,
};

module.exports = jobController;
