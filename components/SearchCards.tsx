import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";
import Tag from "./Tag";

export type Result = {
  id: string;
  name: string;
  tag: string[];
};

function SearchCards({ result }: { result: Result }) {
  const router = useRouter();
  return (
    <Card>
      <TouchableOpacity
        className="flex-row items-start justify-between gap-2"
        onPress={() => {
          router.push("/detail");
        }}
      >
        <View className="gap-2">
          <Text className="text-lg font-extrabold text-text">
            {result.name}
          </Text>
          <View className="flex-row gap-2">
            {result.tag.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </View>
        </View>
        <Text className="text-lg font-semibold text-teal-400/50">
          {result.id}
        </Text>
      </TouchableOpacity>
    </Card>
  );
}

export default SearchCards;
