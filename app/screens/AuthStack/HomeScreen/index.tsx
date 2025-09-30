import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../../UnAuthStack/LoginScreen";
import React from "react";
import FooterNavigationCustom from "../customComponent/FooterNavigationCustom";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CalendarComponent from "../../../components/CalendarComponent";

const HomeScreen = () => {
  const navigation: Omit<
    NavigationProp<ReactNavigation.RootParamList>,
    "getState"
  > = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Top bar Define */}
      <View style={styles.taskBoxContainer}>
        <View style={styles.workListContainer}>
          <View></View>
          <Text style={styles.workListText}>Work List</Text>
          <TouchableOpacity>
            <FontAwesome6 name="sliders" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
        <View style={styles.dateContainer}>
          <TouchableOpacity>
            <Text style={styles.dateText}>Today</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.dateText}>Month</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Calendar Define  */}
      <CalendarComponent />
      {/* Footer Define */}
      <FooterNavigationCustom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  taskBoxContainer: {
    width: "100%",
    height: 151,
    backgroundColor: "#F96060",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workListContainer: {
    flexDirection: "row",
    paddingTop: 50,
    gap: 120,
    alignItems: "center",
  },
  workListText: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },
  dateContainer: {
    flexDirection: "row",
    gap: 130,
    paddingBottom: 14,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#fff",
  },
});

export default HomeScreen;
