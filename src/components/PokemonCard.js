/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
  const [t] = useTranslation();
  const pokemon = props.data;

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered">
          {pokemon.name.toUpperCase()}
        </p>
      </header>
      <div className="card-content is-flex is-horizontal-center">
        <div className="content">
          <img
            src={pokemon.avatar}
            alt={pokemon.name}
            width="100"
            height="100"
          ></img>
        </div>
      </div>
      <footer className="card-footer">
        <Link
          to={`details/${pokemon.name}`}
          target="_blank"
          className="card-footer-item"
        >
          {t("details")}
        </Link>
      </footer>
    </div>
  );
};

export default PokemonCard;
