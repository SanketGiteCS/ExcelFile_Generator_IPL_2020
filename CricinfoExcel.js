const request = require("request");
const cheerio = require("cheerio");
const chalk = require('chalk');
const fs = require("fs");
const xlsx = require('xlsx');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url,callback);

let matches = []; 
function callback(err,res,html){
    const $ = cheerio.load(html);
    let matchesObj = $("a[data-hover='Scorecard']");
    // for(let i = 0;i<1;i++){
        let ScoreBoardUrl = "https://www.cricinfo.com"+$(matchesObj[0]).attr("href");
        matches.push({
            "MatcheUrl" : ScoreBoardUrl,
            "Innings" :[]
        })
        request(ScoreBoardUrl,inningFinder.bind(this,0)); 
    // }
}

function getBattingData(BattingData){
    const SelectorTool = cheerio.load(BattingData);
    let thead = SelectorTool("");
    let tbody = SelectorTool("");
    console.log(tbody.length);
    let tfooter = SelectorTool("");

}
function getBowlingData(BowlingData){
    const SelectorTool = cheerio.load(BowlingData);

}

function inningFinder(index,err,res,html){
    const $ = cheerio.load(html);
    let BattingInfoObj = $(".Collapsible__contentInner .table.batsman").html();
    //let BowlingInfoObj = $(".Collapsible__contentInner .table.bowler");
    fs.writeFileSync("temp.html",BattingInfoObj);
    getBattingData(BattingInfoObj);
    

    // let BattingInning1 = $(BattingInfoObj).html();
    // getBattingData(BattingInning1); 

    // let BowlingInning1 = $(BowlingInfoObj[0]).html();
    // getBowlingData(BowlingInning1);

    // let BattingInning2 = $(BattingInfoObj[1]).html();
    // getBattingData(BattingInning2);

    // let BowlingInning2 = $(BowlingInfoObj[1]).html();
    // getBowlingData(BowlingInning2);
}
