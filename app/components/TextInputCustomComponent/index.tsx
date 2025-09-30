import { StyleProp, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type ITextInputCustomComponent = {
  placeholder?: string | undefined;
  label?: string | undefined;
  onChangeText?: (value:string)=>void;
  value?: string
};

const TextInputCustomComponent = ({
  placeholder,
  label,
  onChangeText,
  value
}: ITextInputCustomComponent) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#c5c5c5ff"
          onChangeText={onChangeText}
          // value="string"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 19,
  },
  textInput: {
    paddingVertical: 5,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#c5c5c5ff",
    outlineWidth: 0,
    paddingLeft: 5,
  },
});

export default TextInputCustomComponent;
