const express = require("express");
// const {rootRouter} = require("./routers/rootRouter");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// reacts ko call api
// app.use(cors());

// middleware: body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.json());

// app.use("/api/v1", rootRouter);
require("./routers/routes")(app);

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`connect success on port ${port}`);
});
