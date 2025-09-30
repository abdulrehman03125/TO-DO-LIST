import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TextCustomComponent from "../../../components/TextCustomComponent";
import TextInputCustomComponent from "../../../components/TextInputCustomComponent";
import ButtonCustomComponent from "../../../components/ButtonCustomComponent";
import CustomIconComponent from "../../../components/CustomIconComponent";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const gotoBackHandler = () => {
    navigation.goBack();
  };
  const gotoRestPasswordHandler = () => {
    navigation.navigate("RestPassword");
  };
  return (
    <SafeAreaView style={{ paddingHorizontal: 24 }}>
      <View style={{ paddingTop: 20, paddingBottom: 40 }}>
        <CustomIconComponent
          name="arrow-left"
          size={24}
          color="black"
          gotoBackFunction={gotoBackHandler}
        />
      </View>
      <View>
        <TextCustomComponent
          mainHeadingText="Forgot Password"
          subHeadingText="Please enter your email below to receive your password reset instructions"
        />
        <TextInputCustomComponent
          label="Username"
          placeholder="Enter Your username"
        />
      </View>
      <View style={{ paddingTop: 40 }}>
        <ButtonCustomComponent
          btnName="Send Request"
          onPressFunction={gotoRestPasswordHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
