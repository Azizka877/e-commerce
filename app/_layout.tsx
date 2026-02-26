import { Stack } from "expo-router";
import '@/global.css'
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WithLlistContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack />
    <CartProvider>
      <WishlistProvider>
        <Stack screenOptions={{ headerShown:false}} />;

      </WishlistProvider>
    </CartProvider>
    </GestureHandlerRootView>
  )
}