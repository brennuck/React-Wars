import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterInfo from "./CharacterInfo";

export default function Character() {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people')
        .then(res => {
            console.log(res.data.results)
            setInfo(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {info.map(hero => {
                return (
                    <CharacterInfo
                        name={hero.name}
                        height={hero.height}
                        mass={hero.mass}
                        hair_color={hero.hair_color}
                        skin_color={hero.skin_color}
                    />
                )
            })}
        </div>
    )
}