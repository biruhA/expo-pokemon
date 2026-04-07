import { PokemonService } from "@/api/pokemon.service";
import SafeView from "@/components/SafeView";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import useDebounce from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 400);

  const { data } = useQuery({
    queryKey: ["getPokemons"],
    queryFn: PokemonService.getPokemons,
    staleTime: Infinity,
  });

  const filteredData = useMemo(() => {
    if (!debouncedQuery) return [];
    return (
      data?.results
        ?.filter((p: any) =>
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
        )
        .slice(0, 10) ?? []
    );
  }, [debouncedQuery, data]);

  return (
    <SafeView
      header={
        <SearchHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      }
    >
      <SearchResults
        filteredData={filteredData}
        searchQuery={searchQuery}
        onClear={() => setSearchQuery("")}
      />
    </SafeView>
  );
};

export default SearchScreen;
