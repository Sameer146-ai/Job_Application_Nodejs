const express = require("express");

const jobController = require("../controller/job.controller");

const router = express.Router();


router.post("/api/v1/job/create", jobController.createjob);

router.get("/api/v1/job/list",jobController.listjob);

router.patch("/api/v1/job/edit",jobController.editjob);

router.delete("/api/v1/job/delete",jobController.deletejob);


module.exports = router;