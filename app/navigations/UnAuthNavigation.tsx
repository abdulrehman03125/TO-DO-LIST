import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/UnAuthStack/LoginScreen";
import ForgetPasswordScreen from "../screens/UnAuthStack/ForgetPasswordScreen";
import ResetPasswordScreen from "../screens/UnAuthStack/ResetPasswordScreen";

const UnAuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RestPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthNavigation;
