import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

const Pokedex = (props) => {
    const { pokemon } = props;
    return (
        <div className="Pokedex">
        <h1>Pokedex</h1>
        <div className="Pokedex-cards">
            {pokemon.map((p) => (
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
            ))}
        </div>
        </div>
    );
};

export default Pokedex;
