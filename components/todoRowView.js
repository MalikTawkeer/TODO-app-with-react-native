import React from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";

export const TodoRowView = ({title, description, status}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: "gray",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
});
