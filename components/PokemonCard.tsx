import { blurhash } from "@/constants/blurhash";
import { usePokemonFullData } from "@/hooks/usePokemonDetails";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import Card from "./Card";
import TypeTag from "./TypeTag";

export type Pokemon = {
  id: string;
  name: string;
  types: string[];
  description: string;
  imageUrl: string;
};

function PokemonCard({ name }: { name: string }) {
  const router = useRouter();
  const { data, isLoading } = usePokemonFullData(name);

  if (isLoading) return <View className="h-40 m-2 bg-slate-200 rounded-3xl" />;

  return (
    <Card>
      <View className="flex-row justify-between relative mb-2">
        <View className="flex-row items-center gap-4">
          {data?.types?.map((t: any) => (
            <TypeTag key={t.type.name} name={t.type.name.toUpperCase()} />
          ))}
        </View>
        <Text className="text-5xl font-semibold text-teal-100/50 absolute -right-1 -top-3">
          #{String(data.id).padStart(3, "0")}
        </Text>
      </View>

      <View className="flex-row justify-between items-center gap-4">
        <View className="flex-1 gap-2">
          <Text className="text-2xl font-semibold">{data.name}</Text>
          <Text className="text-md text-ellipsis line-clamp-3">
            {data.description}
          </Text>
          <Button
            mode="contained"
            className="bg-primary-dark rounded-2xl mt-2 w-3/4"
            onPress={() => {
              router.push({
                pathname: "/detail",
                params: { name },
              });
            }}
          >
            <Text className="text-white">View Details</Text>
          </Button>
        </View>
        <Image
          source={{ uri: data.sprites.other["official-artwork"].front_default }}
          placeholder={blurhash}
          contentFit="cover"
          transition={500}
          className="w-32 h-32 rounded-2xl bg-gray-100"
        />
      </View>
    </Card>
  );
}

export default PokemonCard;
