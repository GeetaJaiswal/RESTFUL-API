const express = require("express");
require("./db/conn");
// const Student = require("./models/students");
const studentRouter = require("./routers/students");


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // to get data as json from postman
app.use(studentRouter);


app.listen(port,()=>{
    console.log(`connection setup at ${port}`);
})