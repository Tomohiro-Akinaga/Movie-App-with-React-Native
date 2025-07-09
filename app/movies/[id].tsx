import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MovieDetail() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Movie details : {id}</Text>
    </View>
  );
}
