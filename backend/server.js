const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT;
require('dotenv').config()
// define the ping route
app.get('/ping',(req,res)=>{
  res.send('pong');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;
