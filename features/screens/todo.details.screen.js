import React from "react";
import { Text, View, StyleSheet, } from "react-native";


export const TodoDetailsScreen = ({ route }) => {
  const { todo } = route.params;
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.text}>{todo.title}</Text>
      <Text style={styles.text}>{todo.description}</Text>
      <Text style={styles.text}>{todo.status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 50,
    backgroundColor: "pink",
    alignItems: "center",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  text: {
    color: "blue",
    fontWeight: "900",
    fontSize: 20,
  }
});
