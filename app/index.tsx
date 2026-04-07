import CustomHeader from "@/components/CustomHeader";
import PokemonCard from "@/components/PokemonCard";
import SafeView from "@/components/SafeView";
import { useInfinitePokemons } from "@/hooks/useInfinitePokemons";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const HomeScreen = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePokemons();
  const [flattenedData, setFlattenedData] = useState<
    { name: string; url: string }[]
  >([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setFlattenedData(data?.pages.flatMap((page) => page.results) || []);
  }, [data]);

  const fetchMoreData = () => {
    if (isFetchingNextPage || !hasMore) return;
    fetchNextPage();
  };

  const renderFooter = () => {
    if (isFetchingNextPage) {
      return (
        <View className="py-6 items-center justify-center">
          <ActivityIndicator animating={true} color="#0061a4" size="small" />
        </View>
      );
    }
    if (!hasMore && flattenedData.length > 0) {
      return (
        <View className="py-6 items-center justify-center">
          <Text className="text-text-muted font-medium">
            You've caught them all!
          </Text>
        </View>
      );
    }
    return null;
  };

  const renderEmpty = () => {
    return (
      <View className="flex-1 items-center justify-center py-20">
        <Text className="text-xl font-semibold text-text-muted">
          No Pokémon found.
        </Text>
      </View>
    );
  };

  return (
    <SafeView header={<CustomHeader />}>
      <FlatList
        data={flattenedData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View className="pb-4">
            <PokemonCard name={item.name} />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="my-6">
            <Text className="text-sm font-extrabold text-text-primary-dark">
              ARCHICE COLLECTION
            </Text>
            <Text className="text-3xl font-semibold text-text">Pokedex</Text>
          </View>
        }
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReached={fetchMoreData}
        onEndReachedThreshold={0.5}
      />
    </SafeView>
  );
};

export default HomeScreen;
