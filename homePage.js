const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require('./allMatches');
// request module helps us to get html of Web page.
request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595",
  function (error, response, data) {
    processData(data);
  }
);

function processData(html) {
  let ch = cheerio.load(html);
  // cheerio will get the data present in the given selector
  let aTag = ch('.widget-items.cta-link a');
  let allMatchesLink = "https://www.espncricinfo.com" + aTag.attr("href");
  getAllMatches(allMatchesLink);
}