const express = require("express");
const app = express();
require("./db/conn");
// const menRanking = require("../src/models/men");
const router = require("./router/men");

const port = process.env.PORT || 3000;
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`connection at port ${port}`);
});