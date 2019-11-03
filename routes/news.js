var express = require("express");
var fs = require("fs");
var router = express.Router();
var path = require("path");

router.get("/:newsId", function(req, res, next) {
  var news = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./news.json"), "utf8")
  );
  res.render("news", {
    news: JSON.stringify(news.find(n => n.id === +req.params.newsId)),
  });
  res.send("respond with a resource");
});

module.exports = router;
