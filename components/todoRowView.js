import React, { useContext } from "react";

import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button, IconButton } from "react-native-paper";

import { TodoContext } from "../contexts/todos.context";

export const TodoRowView = ({ id, title, description, status }) => {
  const { deleteTodo } = useContext(TodoContext);

  const delTodo = () => {
    deleteTodo(id);
  };

  return (
    <View style={styles.rowContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.status}>{status}</Text>
      <View>
        <Button
          buttonColor="red"
          textColor="white"
          style={{
            width: 10,
            alignSelf: "flex-end",
          }}
          onPress={() => delTodo()}
        >
          Delete
        </Button>
      </View>
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
