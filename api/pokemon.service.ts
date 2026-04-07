import apiClient from "./clients";
import { ENDPOINTS } from "./endpoints";

export const PokemonService = {
  getPokemons: async (): Promise<any> => {
    const { data } = await apiClient.get("/pokemon");
    return data;
  },

  getPokemonsInfinite: async ({ pageParam }: { pageParam?: string }) => {
    const url = pageParam || ENDPOINTS.POKEMON.LIST;
    const { data } = await apiClient.get(url);
    return data;
  },
  getFullPokemonData: async (name: string) => {
    const [detailRes, speciesRes] = await Promise.all([
      apiClient.get(ENDPOINTS.POKEMON.DETAILS(name)),
      apiClient.get(ENDPOINTS.POKEMON.SPECIES(name)),
    ]);

    return {
      ...detailRes.data,
      description: speciesRes.data.flavor_text_entries
        .find((entry: any) => entry.language.name === "en")
        ?.flavor_text?.replace(/\f/g, " "),
    };
  },
};
