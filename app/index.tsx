import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-4 text-gray-800">
        Todo App
      </Text>
      <Text className="text-lg text-gray-600 mb-8">
        Welcome to your Todo application
      </Text>
      <Link href="/login" className="bg-orange-500 px-6 py-3 rounded-lg">
        <Text className="text-white font-semibold">Go to Login</Text>
      </Link>
    </View>
  );
}
