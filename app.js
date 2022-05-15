const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/Router');
const cors = require ('cors');
const app = express()

//env file pATH
dotenv.config({path: './.env'});
require('./db/conn');

app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(router) // tells the server to use the routes in routes.js

app.listen(process.env.PORT, () => {
  console.log(`Server is successful run`)
})