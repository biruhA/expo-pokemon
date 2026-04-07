import { Text, View } from "react-native";
import { Icon } from "react-native-paper";

function LableValue({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <View className="flex-row justify-between items-center">
      <View className="flex-row items-center gap-4">
        <Icon source={icon} size={21} color="gray" />
        <Text className="text-md font-medium text-text">{label}</Text>
      </View>
      <Text className="text-base font-medium text-text">{value}</Text>
    </View>
  );
}

export default LableValue;
