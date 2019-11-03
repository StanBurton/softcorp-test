var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

router.get("/", function(req, res, next) {
  var news = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./news.json"), "utf8")
  );
  res.render("index", {
    news: JSON.stringify(news),
  });
});

module.exports = router;
