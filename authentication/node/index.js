var express = require("express");
var app = express();

app.get("/test", function(req, res) {
    res.send("HELLO TEST");
  });
app.get("/headers", function(req, res) {
//    console.log(JSON.stringify(req.headers));
    res.json(req.headers);
  });  
  app.listen(8001, function() {
    console.log("Server running on port 8001");
  });
  



