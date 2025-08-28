import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import "../assets/css/global.css";


function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const segments = useSegments();
  const [isAuth] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Check if we're in a protected route
    const inProtectedRoute = segments[0] === "(tabs)";
    
    if (!isAuth && inProtectedRoute && !isNavigating) {
      setIsNavigating(true);
      // Use setTimeout to ensure navigation happens after mounting
      setTimeout(() => {
        router.replace("/auth");
        setIsNavigating(false);
      }, 0);
    } else if (isAuth && segments[0] === "auth" && !isNavigating) {
      setIsNavigating(true);
      setTimeout(() => {
        router.replace("/(tabs)");
        setIsNavigating(false);
      }, 0);
    }
  }, [isAuth, segments, isNavigating, router]);

  return <>{children}</>;
}


export default function RootLayout() {
  return (
    <>
      <RouteGuard>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="auth" options={{ headerShown: false }} />
        </Stack>
      </RouteGuard>
    </>
  );
}
