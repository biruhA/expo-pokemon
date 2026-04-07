import React from "react";
import { View } from "react-native";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <View className="px-6 py-6 shadow-sm rounded-3xl border border-gray-200 bg-surface gap-3">
      {children}
    </View>
  );
}

export default Card;
