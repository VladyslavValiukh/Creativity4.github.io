const path = require("path");
const express = require("express");
var app = express();
  var pug = require('pug');
var port = 3334;

app.listen(port, function () {
  console.log(`Server is listening on the port ${port}`)
});
app.get('/pug',function(req,res)
{
  res.send(
pug.renderFile(
      path.resolve(__dirname,"../pug/index.pug")
  )
)
});
app.use('/scss', express.static(path.resolve(__dirname, '../scss')))
app.use('/img', express.static(path.resolve(__dirname, '../img')))
app.use('/js',express.static(path.resolve(__dirname,'../js')))
