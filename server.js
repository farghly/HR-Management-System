const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// get configuration file
dotenv.config({path:'./back-end/config.env'})

const DB = process.env.DATABASE_URL
const PORT = process.env.PORT


app.get('/',(req,res) =>{
    res.send("Hello from the home page")
})

mongoose.connect(DB,{})
        .then(connect => {
            console.log("connect to database successfully")
})

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
  });
  