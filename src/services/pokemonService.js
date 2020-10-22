import axios from "axios";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";

const IMAGE_SOURCES = {
  SPRITES:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ID}}.png",
  DREAM_WORLD:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/{{ID}}.svg",
  OFFICIAL_ARTWORK:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{{ID}}.png",
};

const getPokemonAvatar = (pokemon, source = IMAGE_SOURCES.OFFICIAL_ARTWORK) => {
  const id = pokemon.url.split("/")[6];
  pokemon.avatar = source.replace("{{ID}}", id);
};

const getPokemonSprites = (pokemon) => {
  pokemon.spriteImages = [];
  if (pokemon.sprites)
    Object.values(pokemon.sprites).forEach((value) => {
      if (value !== null && typeof value === "string") {
        pokemon.spriteImages.push(value);
      }
    });
};

const fetchPokemons = async (page, limit) => {
  try {
    const res = await axios.get(
      POKEMON_API_URL + `?offset=${page * limit}&limit=${limit}`
    );
    res.data.results.map((p) => getPokemonAvatar(p));
    return res.data;
  } catch (err) {
    throw err;
  }
};

const fetchPokemon = async (name) => {
  try {
    const res = await axios.get(POKEMON_API_URL + `/${name}`);
    getPokemonSprites(res.data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export { fetchPokemons, fetchPokemon, getPokemonAvatar, getPokemonSprites };
