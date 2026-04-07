import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-paper";
import Card from "./Card";
import LableValue from "./LableValue";

interface DimentionsCardProps {
  height?: number;
  weight?: number;
  baseExperience?: number;
}

function DimentionsCard({ height, weight, baseExperience }: DimentionsCardProps) {
  return (
    <Card>
      <Text className="text-lg font-semibold text-text">Dimensions</Text>
      <View className="gap-6 mt-4">
        <LableValue icon="weight" label="Height" value={`${height ? height / 10 : 0}m`} />
        <LableValue icon="weight" label="Weight" value={`${weight ? weight / 10 : 0}kg`} />
      </View>
      <Divider className="mt-4" />
      <Text className="text-sm font-semibold text-text-muted mt-4">
        BASE EXPERIENCE
      </Text>
      <View className="flex-row gap-2 items-baseline">
        <Text className="text-2xl font-medium text-primary-dark">{baseExperience || 0}</Text>
        <Text className="text-sm font-medium text-text">XP</Text>
      </View>
    </Card>
  );
}

export default DimentionsCard;
