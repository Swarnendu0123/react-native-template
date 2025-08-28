import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, View } from "react-native";
import { Text, TextInput, Button, useTheme } from "react-native-paper";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const theme = useTheme();

  const handelSwitchMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handelAuth = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-purple-50"
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-black mb-4">
          {isSignUp ? "Welcome Back" : "Create an account"}
        </Text>

        <View className="w-full max-w-sm gap-4">
          <TextInput
            placeholder="Enter your email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            mode="outlined"
            className=""
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Enter your password"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            keyboardType="visible-password"
            mode="outlined"
            onChangeText={setPassword}
            value={password}
          />

          {error && <Text style={{ color: theme.colors.error }}>{error}</Text>}

          {isSignUp ? (
            <View>
              <Button
                onPress={() => {}}
                mode="contained"
                className="bg-orange-500 rounded-full"
              >
                Login
              </Button>

              <View className="flex-row items-center justify-center">
                <Button className="text-orange-500" onPress={handelSwitchMode}>
                  Don&apos;t have an account? Sign up
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <Button
                onPress={handelAuth}
                mode="contained"
                className="bg-orange-500 rounded-full"
              >
                Create account
              </Button>

              <View className="flex-row items-center justify-center">
                <Button onPress={handelSwitchMode} className="text-orange-500">
                  Already have an account? Login
                </Button>
              </View>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
