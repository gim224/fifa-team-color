const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

const ids = require("./origin-data/ids.json");
const items = require("./origin-data/items.json");
const names = require("./origin-data/names.json");
const nums = require("./origin-data/nums.json");

const teamColors = [...new Array(ids.length)].map((item, index) => {
  return {
    id: ids[index],
    name: names[index],
    item: items[index],
    num: nums[index],
  };
});

/**
 * 팀컬러 전체 목록 반환
 */
app.get("/teamColors", (req, res) => {
  res.json(teamColors);
});

/**
 * teamColorId에 속한 플레이어 전체 목록 반환
 */
app.get("/teamColors/:teamColorId/playerList", (req, res) => {
  const teamColorId = req.params.teamColorId;

  const min = Math.min(...ids);
  const max = Math.max(...ids);

  if (!teamColorId || Number(teamColorId) < min || max < Number(teamColorId)) {
    res.status(404).send();
    return;
  }

  const file = fs
    .readFileSync(`./origin-data/team-color/${teamColorId}.json`)
    .toString();
  const data = JSON.parse(file);

  res.json(data);
});

/**
 * teamColorId 플레이어 전체 목록 JSON 파일로 저장
 */
app.post("/teamColors/:teamColorId/playerList", (req, res) => {
  const teamColorId = req.params.teamColorId;
  const playerList = JSON.stringify(req.body, null, 2);

  fs.writeFileSync(
    `./origin-data/team-color/${teamColorId}.json`,
    playerList,
    (err) => {
      if (err) {
        res.status(500).send();
        throw err;
      }
      console.log("Data written to file");
      res.status(201).send();
    }
  );
});

app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("server started on port 5000");
});
