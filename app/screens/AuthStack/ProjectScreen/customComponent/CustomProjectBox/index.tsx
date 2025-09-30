import { ColorValue, StyleSheet, Text, View } from "react-native";
// import { ViewStyle } from "react-native/types_generated/index";

type ICustomProjectBox = {
  projectName?: string | undefined;
  totalNumberOfTask?: number | undefined;
  lightColorDotStyle?: ColorValue | undefined;
  darkColorDotStyle?: ColorValue | undefined;
};

const CustomProjectBox = ({
  projectName,
  totalNumberOfTask,
  lightColorDotStyle,
  darkColorDotStyle,
}: ICustomProjectBox) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.outerDotContainer,
          { backgroundColor: lightColorDotStyle },
        ]}
      >
        <View
          style={[
            styles.outerDotContainer,
            { backgroundColor: darkColorDotStyle },
          ]}
        ></View>
      </View>
      <Text>{projectName}</Text>
      <Text> {totalNumberOfTask} Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 165,
    height: 180,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  outerDotContainer: {
    width: 26,
    height: 26,
    borderRadius: "100%",
    position: "relative",
  },
  innerDotContainer: {
    width: 16,
    height: 16,
    borderRadius: "100%",
    position: "absolute",
  },
});

export default CustomProjectBox;
