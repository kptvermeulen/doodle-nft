const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const { promisify } = require("util");
const fetch = require("node-fetch");
var CryptoJS = require("crypto-js");
app.use(cors({ origin: "*" }));

const { GoogleSpreadsheet } = require("google-spreadsheet");
const doc = new GoogleSpreadsheet(
  "1qYa_U8nhJghh8aXUrPXY1ANkpvMvQZn_syy3_r1tV6Y"
);
const doc2 = new GoogleSpreadsheet(
  "1a21HVLa0uy83GHFwZkkX7iIPk4u-DHoLatWRmx1Zy8Q"
);

let sheet;
let creds;
let sheet2;
let creds2;

async function Getdata() {
  creds = require("./client_secret.json");
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  sheet = doc.sheetsByIndex[0];
  await doc2.useServiceAccountAuth(creds);
  await doc2.loadInfo();
  sheet2 = doc2.sheetsByIndex[0];
}
Getdata();

const blockedIps = [
  "13.87.85.227",
  "2400:2200:626:ad22:2498:a23d:2488:8497",
  "14.200.54.44",
  "170.39.186.62",
];

app.post("/add-score", async (req, res) => {
  if (sheet !== undefined) {
    let address = req.body.address;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    if (!blockedIps.includes(ip)) {
      console.log(ip);
      let walletworth = "wallet value not available";
      /*await fetch(
        "https://api.zapper.fi/v1/protocols/tokens/balances?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241&addresses[]=" +
          address.toString()
      )
        .then((res2) => res2.json())
        .then((json) => {
          if (json.statusCode === 400) {
            res.sendStatus(404);
          }
          walletworth = Math.round(json[Object.keys(json)[0]].meta[0].value);
        });*/

      let scorePre = req.body.score;
      let bytes = CryptoJS.AES.decrypt(scorePre, "N&b80P!wbZ4GqA6N$@I0qFPUB");
      let score = bytes.toString(CryptoJS.enc.Utf8);
      const date = new Date();
      if (walletworth > 0 || true) {
        await sheet.addRows([
          {
            date: date.toLocaleString("nl-NL"),
            address: address,
            walletworth: walletworth,
            score: score,
            username: req.body.username,
            ip: ip,
          },
        ]);
        try {
          await sheet2.addRows([
            {
              date: date.toLocaleString("nl-NL"),
              address: address,
              walletworth: walletworth,
              score: req.body.score,
              username: req.body.username,
              ip: ip,
            },
          ]);
        } catch (err) {}
        res.send("succes");
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(404);
  }
});
app.post("/get-leaderboard", async (req, res) => {
  let rows = await sheet.getRows();
  rows.sort(function (a, b) {
    return b.score - a.score;
  });
  let leaderboardData = [];
  let count = 0;
  let period = req.body.period || -1;
  rows.map((row, index) => {
    if (row.date !== undefined) {
      const dateSplit = row.date.split(" ")[0].split("-");
      let month = dateSplit[1];
      if (dateSplit[1].length === 1) {
        month = "0" + dateSplit[1];
      }
      let day = dateSplit[0];
      if (dateSplit[0].length === 1) {
        day = "0" + dateSplit[0];
      }
      const datePre =
        dateSplit[2] +
        "-" +
        month +
        "-" +
        day +
        "T" +
        row.date.split(" ")[1] +
        "Z";
      const date = new Date(datePre);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      if ((period === -1 || diffHours <= period) && count < 100) {
        leaderboardData.push({
          score: row.score,
          username: row.username,
          address: row.address,
        });
        count++;
      }
    }
  });

  res.send(leaderboardData);
});

app.post("/test", async (req, res) => {
  console.log("test");
  res.send("test");
});

//80 for development
app.listen(80, () => {
  console.log("running");
});
