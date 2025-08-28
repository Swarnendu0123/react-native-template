import { Text, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-orange-50 px-6">
      <Text className="text-3xl font-bold mb-8 text-orange-500">Login</Text>
      <View className="w-full max-w-sm">
        <Text className="text-gray-700 mb-2">Email</Text>
        <View className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <Text className="text-gray-500">Enter your email</Text>
        </View>
        <Text className="text-gray-700 mb-2">Password</Text>
        <View className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
          <Text className="text-gray-500">Enter your password</Text>
        </View>
        <View className="bg-orange-500 rounded-lg p-4">
          <Text className="text-white font-semibold text-center">Login</Text>
        </View>
      </View>
    </View>
  );
}
