const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

const dbUrl = "mongodb://localhost:27017/omnistack-8";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(dbUrl, options);

mongoose.connection.on("connected", () => {
  console.log("Application connected on database =D");
});

mongoose.connection.on("disconnected", () => {
  console.log("Application disconnected from database.");
});

mongoose.connection.on("error", err => {
  console.log(`Error on connection with database: ${err}`);
});

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3003;
app.listen(port);
