import React from "react";
import { Text, View } from "react-native";

export type TagColor =
  | "primary"
  | "blue"
  | "green"
  | "red"
  | "yellow"
  | "gray"
  | "purple"
  | "default";

type TagProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  color?: TagColor;
};

const ColorMap: Record<TagColor, { bg: string; text: string }> = {
  primary: { bg: "bg-primary-dark/10", text: "text-primary-dark" },
  blue: { bg: "bg-blue-100", text: "text-blue-800" },
  green: { bg: "bg-green-100", text: "text-green-800" },
  red: { bg: "bg-red-100", text: "text-red-800" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-800" },
  gray: { bg: "bg-gray-100", text: "text-gray-800" },
  purple: { bg: "bg-purple-100", text: "text-purple-800" },
  default: { bg: "bg-[#C8FFC0]", text: "text-[#1E6B3B]" },
};

const Tag = ({ children, size = "small", color = "default" }: TagProps) => {
  let padding = "px-2 py-1";
  let textSize = "text-xs";

  if (size === "medium") {
    padding = "px-3 py-1.5";
    textSize = "text-sm";
  } else if (size === "large") {
    padding = "px-4 py-2";
    textSize = "text-base";
  }

  const { bg, text } = ColorMap[color] || ColorMap.default;

  return (
    <View className={`${padding} ${bg} rounded-full self-start`}>
      <Text className={`${textSize} font-semibold ${text}`}>{children}</Text>
    </View>
  );
};

export default Tag;
