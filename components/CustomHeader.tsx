import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { Avatar, IconButton } from "react-native-paper";

const CustomHeader = ({
  noProfile = false,
  title,
}: {
  noProfile?: boolean;
  title?: string;
}) => {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-5 py-2 bg-white">
      <View className="flex-row items-center">
        {noProfile && (
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => {
              router.back();
            }}
            className="-ml-3"
            iconColor="#1a1c1c"
          />
        )}
        <Text className="text-xl font-bold tracking-tighter text-text">
          {title ? title : "Pokémon"}
        </Text>
      </View>

      <View className="flex-row items-center gap-1">
        {/* Search Icon - Distinct blue color from the design */}
        <IconButton
          icon="magnify"
          size={30}
          iconColor="#3b82f6"
          onPress={() => {
            router.push("/search");
          }}
        />
        {/* Profile Avatar */}
        {!noProfile && (
          <Avatar.Image
            size={32}
            source={{
              uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            }}
            className="ml-1"
          />
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
