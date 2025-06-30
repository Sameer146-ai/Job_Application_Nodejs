const express = require("express");

const dotenv = require("dotenv")
dotenv.config();

const mongoose = require("mongoose")

const jobRoutes = require("./routes/job.route")


const app = express();

app.use(express.json()); 

mongoose.connect(process.env.DB_URL)
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err));

// console.log(process.env.DB_URL);
app.use( jobRoutes);


app.listen(8080,()=>console.log("server is running at port no 8080"));
