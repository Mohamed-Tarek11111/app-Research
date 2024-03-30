//-------- mo tarek-----------
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
//-----------------------------







//------tarek------
// Deploymant Access & Comprssion data
const cors = require("cors");
app.use(cors());
//compress all responses
const Comprssion = require("compression");
app.use(Comprssion());

const port = 5000;
app.listen(port, () => {
  console.log(`server run port on ${port}`);
});
