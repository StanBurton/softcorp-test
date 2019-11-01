var needle = require("needle");
var tress = require("tress");
var fs = require("fs");
var cheerio = require("cheerio");

let id = 100;
var flag = true;

var URL = "https://www.rbc.ru/";
var results = [];

var q = tress(function(url, callback) {
  needle.get(url, function(err, res) {
    if (err) throw err;
    var $ = cheerio.load(res.body, {
      xml: {
        normalizeWhitespace: true,
      },
    });

    if (!flag) {
      results.push({
        id: id++,
        title: $(".article .js-slide-title").text(),
        description:
          $(".article .article__text span")
            .text()
            .trim() +
          $(".article .article__text p")
            .text()
            .trim(),
        img: $(".article img").attr("src"),
        src: url,
      });
    }

    //get all links to full news page
    if (flag) {
      //"flag" cause .article also has a js-news-feed-list block
      $(".js-news-feed-list>a").each(function() {
        let href = $(this).attr("href");
        if (href.indexOf("www.rbc.ru") > -1) {
          //has condition cause .js-news-feed-list has advertising
          q.push(href);
        }
      });
      flag = false;
    }

    callback();
  });
}, 15);

q.drain = function() {
  fs.writeFileSync("./data/data.json", JSON.stringify(results, null, 4));
};

q.push(URL);
