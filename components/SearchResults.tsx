import React from "react";
import { FlatList, Text, View } from "react-native";
import SearchCards, { Result } from "./SearchCards";

const DUMMY_RESULTS: Result[] = [
  {
    id: "#001",
    name: "Bulbasaur",
    tag: ["Grass", "Poison"],
  },
  {
    id: "#004",
    name: "Charmander",
    tag: ["Fire"],
  },
  {
    id: "#007",
    name: "Squirtle",
    tag: ["Water"],
  },
];

const SearchResults = () => {
  return (
    <View className="my-6">
      <View className="flex-row gap-3 items-baseline">
        <Text className="text-xl font-bold text-text">Search Results</Text>
        <Text className="text-sm font-medium text-text-muted">
          {DUMMY_RESULTS.length} MATCHES
        </Text>
      </View>
      <FlatList
        data={DUMMY_RESULTS}
        renderItem={({ item }) => <SearchCards result={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className="mt-6"
        contentContainerClassName="gap-3"
      />
    </View>
  );
};

export default SearchResults;
