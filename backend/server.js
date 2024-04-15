const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config()
const mongodburi = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
const routes = require('./routes');
app.use(bodyParser.json())
app.use('/',routes);
//connecting mongoDB
mongoose.connect(mongodburi)

//define route to check mongodb connection
app.get('/mongoDbConnection',(req,res)=>{
  if(mongoose.connection.readyState === 1){
    res.status(200).json('MongoDB is connected successfully.')
  }
  else{
    res.status(400).json('Error connecting to MongoDB.')
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
