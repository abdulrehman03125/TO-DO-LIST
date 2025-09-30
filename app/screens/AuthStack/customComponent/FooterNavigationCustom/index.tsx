import { StyleSheet, View } from "react-native";
import FooterNavigationIconNameCustom from "./FooterNavigationIconNameCustom";
import AddTaskCustomButton from "./AddTaskCustomButton";

const FooterNavigationCustom = () => {
  return (
    <View style={styles.mainFooterContainer}>
      <View style={styles.footerMenuContainer}>
        <FooterNavigationIconNameCustom
          iconName="check-circle"
          navigationTabName="My Task"
          IconSize={24}
          IconColor="#ffffff"
          fontColor="#ffffff"
        />
        <FooterNavigationIconNameCustom
          iconName="appstore"
          navigationTabName="Menu"
          IconSize={24}
          IconColor="#8E8E93"
          fontColor="#8E8E93"
        />
        <AddTaskCustomButton item={{ onPressFunction: () => <View></View> }} />
        <FooterNavigationIconNameCustom
          iconName="file-done"
          navigationTabName="Quick"
          IconSize={24}
          IconColor="#8E8E93"
          fontColor="#8E8E93"
        />
        <FooterNavigationIconNameCustom
          iconName="user"
          navigationTabName="Profile"
          IconSize={24}
          IconColor="#8E8E93"
          fontColor="#8E8E93"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFooterContainer: {
    flex: 1,
    width: "100%",
    height: 70,
    backgroundColor: "#292E4E",
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingVertical: 18,
  },
  footerMenuContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default FooterNavigationCustom;
