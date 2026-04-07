import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

interface EmptySearchStateProps {
  searchQuery: string;
  onClear: () => void;
}

const EmptySearchState = ({ searchQuery, onClear }: EmptySearchStateProps) => {
  return (
    <View className="flex-1 items-center mt-safe-offset-12 gap-3">
      <View className="w-32 h-32 bg-gray-200/50 rounded-full items-center justify-center relative">
        <Icon source="magnify" size={48} color="#cbd5e1" />
        <View className="absolute bottom-9 left-9 bg-gray-100 rounded-full border-2 border-gray-100">
          <Icon source="close-circle" size={18} color="#94a3b8" />
        </View>
      </View>

      <Text className="text-2xl font-extrabold text-text text-center">
        Species Not Found
      </Text>

      <Text className="text-base font-medium text-text-muted text-center px-4 leading-6">
        The specimen
        <Text className="font-extrabold text-text">"{searchQuery}"</Text> does
        not exist in the current Pokédex database.
      </Text>

      <View className="flex-row gap-4 w-full px-4 justify-center mt-4">
        <TouchableOpacity
          onPress={onClear}
          className="bg-blue-500 px-6 py-4 rounded-full flex-1 max-w-[160px] items-center"
        >
          <Text className="text-white font-bold text-base">Clear Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptySearchState;
