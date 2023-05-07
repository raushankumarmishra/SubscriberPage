const express = require("express");
const path = require('path');
require('dotenv').config({path : path.resolve('.env')});

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("WELCOME TO TRADE-KINGHTS");
});

app.listen(3000, (req, res)=>{
    console.log("Listening on port " + 3000);
})