import "@/constants/paper-interop";
import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider>
          <Stack
            initialRouteName="index"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="search"
              options={{
                animation: "fade",
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
