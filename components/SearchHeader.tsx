import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { IconButton, TextInput } from "react-native-paper";

const SearchHeader = () => {
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-6 py-2 bg-white gap-2">
      <IconButton
        icon="arrow-left"
        size={24}
        onPress={() => {
          router.back();
        }}
        className="-ml-3"
        iconColor="#1a1c1c"
      />
      <TextInput
        className="flex-1 bg-white"
        dense
        contentStyle={{ height: 40 }}
        outlineStyle={{ borderRadius: 16 }}
        mode="outlined"
        value={text}
        left={<TextInput.Icon icon="magnify" size={21} color="#0061a4" />}
        right={
          isShow && (
            <TextInput.Icon
              icon="close"
              size={16}
              className="bg-slate-100 rounded-full w-6 h-6"
              onPress={() => {
                setText("");
                setIsShow(false);
              }}
            />
          )
        }
        onChangeText={(text) => {
          setText(text);
          setIsShow(true);
        }}
      />
    </View>
  );
};

export default SearchHeader;
