import React from "react";
import { FlatList, Text, View } from "react-native";
import EmptySearchState from "./EmptySearchState";
import SearchCards from "./SearchCards";

const SearchResults = ({
  filteredData,
  searchQuery,
  onClear,
}: {
  filteredData: any[];
  searchQuery: string;
  onClear: () => void;
}) => {
  return (
    <View className="my-6 flex-1">
      {filteredData.length >= 1 && (
        <View className="flex-row gap-3 items-baseline">
          <Text className="text-2xl font-extrabold text-text">Results</Text>
          <Text className="text-sm font-medium text-text-muted">
            {filteredData.length} MATCHES
          </Text>
        </View>
      )}
      <FlatList
        data={filteredData}
        ListEmptyComponent={() =>
          searchQuery.length > 0 && (
            <EmptySearchState searchQuery={searchQuery} onClear={onClear} />
          )
        }
        renderItem={({ item }) => <SearchCards result={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        className="mt-6"
        contentContainerClassName={
          filteredData.length === 0 ? "flex-1" : "gap-3 pb-10"
        }
      />
    </View>
  );
};

export default SearchResults;
