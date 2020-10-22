import axios from "axios";

const ABILITY_API_URL = "https://pokeapi.co/api/v2/ability";

const getAbilityId = (url) => {
  return url.split("/")[6];
};

const getAbilityDescription = (ability, lang) => {
  let description = "";

  for (let i = 0; i < ability.flavor_text_entries.length; i++) {
    const entry = ability.flavor_text_entries[i];
    if (entry.language.name === lang) {
      description = entry.flavor_text;
      break;
    }
  }

  return description;
};

const fetchAbility = async (id) => {
  try {
    const res = await axios.get(ABILITY_API_URL + `/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export { getAbilityId, getAbilityDescription, fetchAbility };
