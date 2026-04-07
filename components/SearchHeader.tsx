import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { IconButton, Searchbar } from "react-native-paper";

const SearchHeader = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-6 py-2 bg-white gap-2">
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => {
          router.back();
        }}
        className="-ml-3"
        iconColor="#1a1c1c"
      />
      <Searchbar
        placeholder="Search"
        className="flex-1"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchHeader;
