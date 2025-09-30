import { StyleSheet } from "react-native";
import MainNavigation from "./app/navigations/MainNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({});
