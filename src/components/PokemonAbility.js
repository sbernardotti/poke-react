import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  getAbilityId,
  getAbilityDescription,
  fetchAbility,
} from "../services/abilityService";

const PokemonAbility = (props) => {
  const [t, i18n] = useTranslation();
  const { url } = props;
  const [ability, setAbility] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateAbility = (id) => {
    fetchAbility(id).then((data) => {
      setAbility(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const abilityId = getAbilityId(url);
    updateAbility(abilityId);
  }, []);

  if (loading)
    return (
      <button className="button is-white is-loading">{t("loading")}</button>
    );
  else
    return (
      <article className="message">
        <div className="message-body">
          <strong>{ability.name}</strong>
          <br />
          <span>{getAbilityDescription(ability, i18n.language)}</span>
        </div>
      </article>
    );
};

export default PokemonAbility;
