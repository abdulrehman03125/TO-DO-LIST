import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from "react-native";
import React from "react";
import CustomIconComponent from "../../../../../components/CustomIconComponent";

type IAddTaskCustomButtonType = {
  onPressFunction?: any | undefined;
};

const AddTaskCustomButton = ({ item }: { item: IAddTaskCustomButtonType }) => {
  return (
    <TouchableOpacity
      style={styles.TaskBtnContainer}
      onPress={item.onPressFunction}
    >
      <CustomIconComponent name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TaskBtnContainer: {
    width: 56,
    height: 56,
    borderRadius: "100%",
    backgroundColor: "#F96060",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -55,
  },
});

export default AddTaskCustomButton;
