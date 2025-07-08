import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Details() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie details : {id}</Text>
    </View>
  );
}
