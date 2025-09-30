import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomIconComponent from "../../../components/CustomIconComponent";
import { useNavigation } from "@react-navigation/native";
import TextCustomComponent from "../../../components/TextCustomComponent";
import TextInputCustomComponent from "../../../components/TextInputCustomComponent";
import ButtonCustomComponent from "../../../components/ButtonCustomComponent";

const ResetPasswordScreen = () => {
  const navigation = useNavigation();

  const gotoBackHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{ paddingHorizontal: 24 }}>
      <View style={{ paddingTop: 20, paddingBottom: 30 }}>
        <CustomIconComponent
          name="arrow-left"
          size={24}
          gotoBackFunction={gotoBackHandler}
        />
      </View>
      <View>
        <TextCustomComponent
          mainHeadingText="Reset Password"
          subHeadingText="Reset code was sent to your email. Please enter the code and create new password"
        />
      </View>
      <View style={{ gap: 25, paddingTop: 30 }}>
        <TextInputCustomComponent
          label="Rest Code"
          placeholder="Enter Your Number"
        />
        <TextInputCustomComponent
          label="New Password"
          placeholder="Enter Your Password"
        />
        <TextInputCustomComponent
          label="Confirm Password"
          placeholder="Enter Your Confirm Password"
        />
      </View>
      <View style={{ paddingTop: 80 }}>
        <ButtonCustomComponent btnName="Rest Password" />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
