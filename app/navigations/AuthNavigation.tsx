import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/AuthStack/HomeScreen";
import ProfileScreen from "../screens/AuthStack/ProfileScreen";
import ProjectScreen from "../screens/AuthStack/ProjectScreen";
import QuickScreen from "../screens/AuthStack/QuickScreen";
import TaskCreateScreen from "../screens/AuthStack/TaskCreateScreen";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Quick" component={QuickScreen} />
      <Stack.Screen name="TaskCreate" component={TaskCreateScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
