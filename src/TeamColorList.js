import { getRegExp } from "korean-regexp"
import { useState } from "react";
import teamColorList from "./teamColorList.json"

export function TeamColorList() {
    
    const [value, setValue] = useState("");
    console.log(value);
    const regExp = getRegExp(value, {
        initialSearch: true,
        fuzzy: true
    });

    console.log(regExp);
    
    return (
    <>
    <input type="text" placeholder="test" onChange={(e) => {
        setValue(e.target.value);
    }}/>
    <ul>
        {teamColorList
        .filter((teamColor) => (String(teamColor.name).search(getRegExp(value, {
            initialSearch: true,
            fuzzy: true
        })) !== -1))
        .map((teamColor) => (
            <li key={teamColor.id}>
                {teamColor.name}
            </li>
        ))}        
    </ul>
    </>
    )
}