import axios from "axios";
import { useEffect, useState } from "react";

export function useFindTeamColorList() {
  const [teamColorList, setTeamColorList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/teamColors", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("useFindTeamColorList", response.data);
        setTeamColorList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return teamColorList;
}

export function useFindPlayerList(teamColorId) {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/teamColors/${teamColorId}/playerList`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("useFindPlayerList", response.data);
        setPlayerList(response.data?.players);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [teamColorId]);

  return playerList;
}
