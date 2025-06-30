const express = require("express");

const mongoose = require("mongoose")

const jobRoutes = require("./routes/job.route")


const app = express();

app.use(express.json()); 

mongoose.connect("mongodb+srv://sameerrahangdale63:YymxW8dYcUgXqWKv@cluster0.3knqum2.mongodb.net/")
.then(() => console.log(`DB Connected successfully`))
.catch(err => console.log(`Error connecting database`, err));



app.use( jobRoutes);


app.listen(8080,()=>console.log("server is running at port no 8080"));
