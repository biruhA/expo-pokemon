import { PokemonService } from "@/api/pokemon.service";
import { useQuery } from "@tanstack/react-query";

export function usePokemonFullData(name: string) {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => PokemonService.getFullPokemonData(name),
    staleTime: 1000 * 60 * 60,
  });
}
