const express = require("express");

const mongoose = require("mongoose")

const jobRoutes = require("./routes/job.route")


const app = express();

app.use(express.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/jobapp")
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err));



app.use( jobRoutes);


app.listen(8080,()=>console.log("server is running at port no 8080"));
