import { TextField } from "@mui/material";
import { getRegExp } from "korean-regexp";
import { useState } from "react";
import { useFindPlayerList, useFindTeamColorList } from "./useFind";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";

export default function TeamColorList() {
  const [value, setValue] = useState("");

  const teamColorList = useFindTeamColorList();

  return (
    <>
      <TextField
        id="outlined-basic"
        label="특성팀컬러명"
        variant="outlined"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <List
        sx={{
          width: "100vw",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "100vh",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {teamColorList.map((teamColor) => (
          <li key={teamColor.id}>
            <ul>
              <ListSubheader>
                {teamColor.name} | {teamColor.num + "명"} | {teamColor.item}
              </ListSubheader>
              <PlayerList key={teamColor.id} teamColorId={teamColor.id} />
            </ul>
          </li>
        ))}
      </List>
    </>
  );
}

function PlayerList({ teamColorId }) {
  const playerList = useFindPlayerList(teamColorId);

  return playerList.map((player) => (
    <ListItem key={teamColorId + "_" + player.pid}>
      <ListItemText primary={<Player player={player} />} />
    </ListItem>
  ));
}

function Player({ player }) {
  return (
    <div>
      <Avatar
        alt="Remy Sharp"
        src={`https://fo4.dn.nexoncdn.co.kr/live/externalAssets/common${player.thumb}.png`}
      />
      {player.pay}
      <img
        src={`https://ssl.nexon.com/s2/game/fo4/obt/externalAssets/season/${player.seasonImgSmall}.png`}
        alt=""
      ></img>
      {player.season} {player.name} {player.position} {player.ovr}{" "}
      {player.price}
    </div>
  );
}
