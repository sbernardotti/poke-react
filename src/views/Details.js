import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../services/pokemonService";

import PokemonAbility from "../components/PokemonAbility";

const Details = () => {
  const [t] = useTranslation();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const updateDetails = (pokemonName) => {
    fetchPokemon(pokemonName).then((data) => {
      setPokemon(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    updateDetails(name);
  }, []);

  if (loading)
    return (
      <button className="button is-white is-loading">{t("loading")}</button>
    );
  else
    return (
      <div>
        <h1 className="title">{pokemon.name}</h1>
        <h2 className="subtitle">{t("pokemon.details")}</h2>
        <hr />
        <section>
          <p className="subtitle">{t("pokemon.sprites")}</p>
          {pokemon.spriteImages.map((src) => {
            if (src !== null)
              return (
                <img src={src} width="96" height="96" className="zoomable" />
              );
          })}
        </section>
        <hr />
        <section>
          <p className="subtitle">{t("pokemon.abilities")}</p>
          {pokemon.abilities.map((a, key) => {
            return <PokemonAbility key={key} url={a.ability.url} />;
          })}
        </section>
      </div>
    );
};

export default Details;
