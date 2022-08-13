import useFindTeamColorPlayerList from "./useFindTeamColorPlayerList"
import teamColorList from "./teamColorList.json"

const index = 2;

export default function App() {
    const teamColorPlayerList = useFindTeamColorPlayerList(teamColorList[index].id);

    return (
        <>
        <div>{teamColorList[index].name}</div>
         <ul>
         {teamColorPlayerList.map((player) => {
             return (
             <li key={player.pid}>
                 {player.name}
             </li>
             )
         })
         }
         </ul>
         </>
        
    )
}