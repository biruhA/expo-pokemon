import React from "react";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeViewProps extends ViewProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

function SafeView({ children, header, className, ...props }: SafeViewProps) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {header}
      <View
        className={`flex-1 px-4 bg-background ${className || ""}`}
        {...props}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}

export default SafeView;
