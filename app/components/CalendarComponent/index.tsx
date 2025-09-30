import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";

const CalendarComponent = () => {
  const DATE = "2025-09-25";
  return (
    <View style={styles.dateContainer}>
      <CalendarProvider date={DATE}>
        <ExpandableCalendar hideKnob></ExpandableCalendar>
      </CalendarProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    flex: 2,
  },
});

export default CalendarComponent;
