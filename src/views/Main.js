/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchPokemons } from "../services/pokemonService";
import PokemonCard from "../components/PokemonCard";

const Main = () => {
  const [t] = useTranslation();
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const previousPage = () => {
    if (currentPage > 0) {
      let page = currentPage - 1;
      setCurrentPage(page);
      updatePokemons();
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    updatePokemons();
  };

  const updatePokemons = () => {
    setLoading(true);
    fetchPokemons(currentPage, 5).then((data) => {
      setPokemons(data.results);
      setLoading(false);
    });
  };

  useEffect(() => {
    updatePokemons();
  }, []);

  if (loading) return <div>{t("loading")}</div>;
  else
    return (
      <div>
        <div className="columns is-desktop mt-4">
          {pokemons.map((p, key) => {
            return (
              <div className="column">
                <PokemonCard key={key} data={p} />
              </div>
            );
          })}
        </div>
        <nav className="pagination">
          <a onClick={previousPage} className="pagination-previous">
            {t("previous")}
          </a>
          <a onClick={nextPage} className="pagination-next">
            {t("next")}
          </a>
        </nav>
      </div>
    );
};

export default Main;
