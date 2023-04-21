import React from "react";
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <img src={imgSrc} alt={props.name} />
      <div className="Pokecard-data" >Type: {props.type}</div>
      <div className="Pokecard-data" >EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;