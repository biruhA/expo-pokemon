import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Card from "./Card";

export type Result = {
  url: string;
  name: string;
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
        </View>
        <Text className="text-lg font-semibold text-teal-400/50">
          #{String(result.url.split("/")[6]).padStart(3, "0")}
        </Text>
      </TouchableOpacity>
    </Card>
  );
}

export default SearchCards;
