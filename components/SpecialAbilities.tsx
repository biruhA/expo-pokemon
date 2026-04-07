import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-paper";
import Card from "./Card";

interface AbilityInfo {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

interface SpecialAbilitiesProps {
  abilities?: AbilityInfo[];
}

function SpecialAbilities({ abilities }: SpecialAbilitiesProps) {
  return (
    <Card>
      <Text className="text-lg font-semibold text-text mb-2">
        Special Abilities
      </Text>
      <View className="gap-4 mt-2">
        {abilities?.map((a, index) => (
          <AbilityItem
            key={index}
            title={a.ability.name.replace("-", " ").toUpperCase()}
            description={`Details for ${a.ability.name.replace("-", " ")}`}
            icon="star"
            bgColor={a.is_hidden ? "bg-gray-100" : "bg-blue-50/50"}
            iconColor={a.is_hidden ? "#64748b" : "#0284c7"}
            isHidden={a.is_hidden}
          />
        ))}
      </View>
    </Card>
  );
}

function AbilityItem({
  title,
  description,
  icon,
  bgColor,
  iconColor,
  isHidden,
}: {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  isHidden?: boolean;
}) {
  return (
    <View className={`p-4 rounded-2xl ${bgColor} gap-2`}>
      <View className="flex-row items-center gap-3">
        <Icon source={icon} size={20} color={iconColor} />
        <Text className="text-base font-bold text-text">{title}</Text>
        {isHidden && (
          <View className="bg-gray-200 px-2 rounded-md justify-center items-center h-5">
            <Text
              className="font-bold text-text"
              style={{ fontSize: 10, letterSpacing: 0.5 }}
            >
              HIDDEN
            </Text>
          </View>
        )}
      </View>
      <Text className="text-sm font-medium text-text-muted mt-1 leading-5">
        {description}
      </Text>
    </View>
  );
}

export default SpecialAbilities;
