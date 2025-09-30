import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UnAuthNavigation from "./UnAuthNavigation";
import AuthNavigation from "./AuthNavigation";
const MainNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UnAuthNavigation"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="UnAuthNavigation" component={UnAuthNavigation} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
