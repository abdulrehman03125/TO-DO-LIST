import { View, Text, StyleSheet, ColorValue } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type IFooterNavigationIconNameCustomType = {
  iconName?: any | undefined;
  navigationTabName?: string | undefined;
  IconSize?: number | undefined;
  IconColor?: string | undefined;
  fontColor?: ColorValue | undefined;
};

const FooterNavigationIconNameCustom = ({
  iconName,
  navigationTabName,
  IconSize,
  IconColor,
  fontColor,
}: IFooterNavigationIconNameCustomType) => {
  return (
    <View style={styles.mainContainer}>
      <AntDesign name={iconName} size={IconSize} color={IconColor} />
      <Text style={[styles.textStyle, { color: fontColor }]}>
        {navigationTabName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  textStyle: {
    fontSize: 12,
    fontWeight: 600,
  },
});

export default FooterNavigationIconNameCustom;
