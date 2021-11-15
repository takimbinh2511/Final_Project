const express = require("express");
const {rootRouter} = require("./routers/rootRouter");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');



const app = express();


// middleware: body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());

app.use("/api/v1",rootRouter);

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log(`connect success on port ${port}`);
})