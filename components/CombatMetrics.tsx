import React from "react";
import { Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import Card from "./Card";
import Tag from "./Tag";

interface StatItem {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface CombatMetricsProps {
  stats?: StatItem[];
}

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SATK",
  "special-defense": "SDEF",
  speed: "SPD",
};

function CombatMetrics({ stats }: CombatMetricsProps) {
  return (
    <Card>
      <View className="flex-row gap-6">
        <Text className="text-lg font-semibold text-text">Combat Metrics</Text>
        <Tag color="gray" size="medium">
          Base Totals
        </Tag>
      </View>
      <View className="gap-6 mt-4 w-full">
        {stats?.map((s) => (
          <LabledPercent
            key={s.stat.name}
            label={STAT_LABELS[s.stat.name] || s.stat.name.toUpperCase()}
            value={s.base_stat}
          />
        ))}
      </View>
    </Card>
  );
}

function LabledPercent({
  label,
  value,
  max = 255,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const progress = Math.min(Math.max(value / max, 0), 1);
  return (
    <View className="flex-row justify-between items-center gap-4">
      <Text className="text-sm font-medium text-text w-10">{label}</Text>
      <View className="flex-1">
        <ProgressBar progress={progress} />
      </View>
      <Text className="text-sm font-medium text-text w-8 text-right">
        {value}
      </Text>
    </View>
  );
}

export default CombatMetrics;
