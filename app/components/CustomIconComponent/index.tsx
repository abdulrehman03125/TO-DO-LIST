import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

type ICustomIconComponentType = {
  name?: any | undefined;
  size?: number | undefined;
  color?: string | undefined;
  gotoBackFunction?: any | undefined;
};

const CustomIconComponent = ({
  name,
  size,
  color,
  gotoBackFunction,
}: ICustomIconComponentType) => {
  return (
    <AntDesign
      name={name}
      size={size}
      color={color}
      onPress={gotoBackFunction}
    />
  );
};

export default CustomIconComponent;
