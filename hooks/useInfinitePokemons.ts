import { PokemonService } from "@/api/pokemon.service";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useInfinitePokemons() {
  return useInfiniteQuery({
    queryKey: ["pokemons"],
    queryFn: PokemonService.getPokemonsInfinite,
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
  });
}
