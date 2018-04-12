const express = require("express");
const app = express();

const port = process.env.PORT || 8080;


app.use(express.static("./build"));


app.listen(port, function() {
  console.log("App is listening on port ", port);
});