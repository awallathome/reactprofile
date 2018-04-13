const express = require("express");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 8080;


app.use(express.static("./build"));



app.get("/api", function(req, res) {

  res.json({ msg: "It works"});
});

app.get("/github", function(req, res) {

    // req.query 
      // { search: ""}
    const gitHubAPI = "https://api.github.com/users/" + req.query.search; 
    axios
      .get(gitHubAPI)
      .then(response => res.json(response.data))
      .catch((err) => res.status(500).json({ error: err}));


});



app.listen(port, function() {
  console.log("App is listening on port ", port);
});