import { View, Text, StyleSheet } from "react-native";
import React from "react";

type ITextComponentTypes = {
  mainHeadingText?: string | undefined;
  subHeadingText?: string | undefined;
};

const TextCustomComponent = ({
  mainHeadingText,
  subHeadingText,
}: ITextComponentTypes) => {
  return (
    <View>
      <Text style={styles.mainHeading}>{mainHeadingText}</Text>
      <Text style={styles.subHeading}>{subHeadingText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 32,
    fontWeight: 600,
    paddingBottom: 12,
  },
  subHeading: {
    fontSize: 16,
  },
});

export default TextCustomComponent;
