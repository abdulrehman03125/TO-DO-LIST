import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type IButtonCustomComponentTypes = {
  btnName?: string | undefined;
  onPressFunction?: any | undefined;
};

const ButtonCustomComponent = ({
  btnName,
  onPressFunction,
}: IButtonCustomComponentTypes) => {
  return (
    <TouchableOpacity
      style={styles.touchableBtnStyle}
      onPress={onPressFunction}
    >
      <Text style={styles.btnText}>{btnName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableBtnStyle: {
    width: "100%",
    height: 48,
    backgroundColor: "#F96060",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ButtonCustomComponent;
