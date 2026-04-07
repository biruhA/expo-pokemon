import apiClient from "./clients";

export const PokemonService = {
  getPokemons: async (): Promise<any> => {
    const { data } = await apiClient.get("/pokemon?limit=2000");
    return data;
  },

  getPokemonsInfinite: async ({ pageParam }: { pageParam?: string }) => {
    const url = pageParam || "/pokemon?limit=20&offset=0";
    const { data } = await apiClient.get(url);
    return data;
  },

  getFullPokemonData: async (name: string) => {
    const [detailRes, speciesRes] = await Promise.all([
      apiClient.get(`/pokemon/${name}`),
      apiClient.get(`/pokemon-species/${name}`),
    ]);

    return {
      ...detailRes.data,
      description: speciesRes.data.flavor_text_entries
        .find((entry: any) => entry.language.name === "en")
        ?.flavor_text?.replace(/\f/g, " "),
    };
  },
};
