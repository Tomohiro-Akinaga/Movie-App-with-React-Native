import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress: () => void;
  value: string;
  onChangeText: (text: string) => void;
}

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQ4OGJkY2RiODk5M2MzZmZmMzVjZDE4NzU3OTgxZCIsIm5iZiI6MTYzNDY4MjI0OC4zNzEsInN1YiI6IjYxNmY0NTg4ODk0ZWQ2MDA0MmY4MzgzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xN9TMWcxxwtJe8LyLG1cBKlD5v3JTrOpVyWxPLmRZ2E

// 9a488bdcdb8993c3fff35cd18757981d

export default function SearchBar({ placeholder, onPress, value, onChangeText }: Props) {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
}
