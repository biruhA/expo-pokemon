import CombatMetrics from "@/components/CombatMetrics";
import CustomHeader from "@/components/CustomHeader";
import DetailHeader from "@/components/DetailHeader";
import DimentionsCard from "@/components/DimentionsCard";
import SafeView from "@/components/SafeView";
import SpecialAbilities from "@/components/SpecialAbilities";
import { usePokemonFullData } from "@/hooks/usePokemonDetails";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

function DetailScreen() {
  const { name } = useLocalSearchParams();

  const { data: pokemonData } = usePokemonFullData(name as string);

  return (
    <SafeView
      className="px-6 gap-4"
      header={<CustomHeader noProfile={true} title="Detail Pokemon" />}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex-col gap-6"
      >
        <DetailHeader
          name={pokemonData?.name}
          id={pokemonData?.id}
          types={pokemonData?.types}
          imageUri={
            pokemonData?.sprites?.other?.["official-artwork"]?.front_default
          }
        />
        <DimentionsCard
          height={pokemonData?.height}
          weight={pokemonData?.weight}
          baseExperience={pokemonData?.base_experience}
        />
        <CombatMetrics stats={pokemonData?.stats} />
        <SpecialAbilities abilities={pokemonData?.abilities} />
        <View className="h-10" />
      </ScrollView>
    </SafeView>
  );
}

export default DetailScreen;
