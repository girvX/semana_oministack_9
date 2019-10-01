const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_LOGIN, 
{  
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3001);