import { blurhash } from "@/constants/blurhash";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import TypeTag from "./TypeTag";

interface DetailHeaderProps {
  name?: string;
  id?: number;
  types?: { type: { name: string } }[];
  imageUri?: string;
}

const DetailHeader = ({ name, id, types, imageUri }: DetailHeaderProps) => {
  return (
    <View className="items-center mt-8 gap-6">
      <Image
        source={{
          uri: imageUri,
        }}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
        className="w-full h-96 rounded-2xl bg-gray-400"
      />
      <View className="w-full">
        <Text className="text-sm font-extrabold text-text-primary-dark">
          ARCHICE COLLECTION
        </Text>
        <Text className="text-5xl font-extrabold text-text capitalize">{name}</Text>
        <View className="flex-row gap-2 mt-3">
          {types?.map((t) => (
            <TypeTag key={t.type.name} name={t.type.name.toUpperCase()} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default DetailHeader;
