import React from 'react';

const CharacterInfo = ({ name, height, mass, hair_color, skin_color }) => {
    return (
        <div>
            <h3>Name: {name}</h3>
            <h5>Height: {height} </h5>
            <h5>Mass: {mass}</h5>
            <h5>Hair Color: {hair_color}</h5>
            <h5>Skin Color: {skin_color}</h5>
        </div>
    )
}

export default CharacterInfo;