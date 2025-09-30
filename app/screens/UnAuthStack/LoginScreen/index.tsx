import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextCustomComponent from "../../../components/TextCustomComponent";
import TextInputCustomComponent from "../../../components/TextInputCustomComponent";
import ButtonCustomComponent from "../../../components/ButtonCustomComponent";
import { useNavigation } from "@react-navigation/native";
import CustomIconComponent from "../../../components/CustomIconComponent";
import { useState } from "react";
import React from "react";






const LoginScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [email, setEmail] = useState<string>("");

  const forgetPasswordScreenHandler = () => {
    navigation.navigate("ForgetPassword");
  };
  const gotoHomeScreenHandler = () => {
    navigation.navigate('AuthNavigation')
  };


  const emailHandel= ()=>(
    setEmail('EMail login ')

  )
  return (
    <SafeAreaView style={{ paddingHorizontal: 24 }}>
      <StatusBar />
      <View style={{ paddingTop: 20, paddingBottom: 30 }}>
        <Text>
          <CustomIconComponent name="arrow-left" size={24} />
        </Text>
      </View>
      <TextCustomComponent
        mainHeadingText="Welcome back"
        subHeadingText="Sign in to continue"
      />
      <View style={{ gap: 10, paddingTop: 18 }}>
        <TextInputCustomComponent
          label="Username"
          placeholder="Enter Your Email"
          onChangeText={emailHandel}
          // value={string}


        />
        <TextInputCustomComponent
          label="Password"
          placeholder="Enter Yur Password"
        />
      </View>
      <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity onPress={forgetPasswordScreenHandler}>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ButtonCustomComponent
          btnName="LogIn"
          onPressFunction={gotoHomeScreenHandler}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  forgetPasswordContainer: {
    paddingTop: 12,
    paddingBottom: 80,
    paddingRight: 24,
    alignItems: "flex-end",
  },
  forgetText: {
    color: "red",
  },
});

export default LoginScreen;
