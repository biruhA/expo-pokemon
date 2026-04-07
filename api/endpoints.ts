export const ENDPOINTS = {
  POKEMON: {
    LIST: "/pokemon?limit=20&offset=0",
    DETAILS: (name: string) => `/pokemon/${name}`,
    SPECIES: (name: string) => `/pokemon-species/${name}`,
  },
};
