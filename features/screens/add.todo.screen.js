import React, { useContext, useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { BackBtn } from "../../components/back.button.component";

import { TodoContext } from "../../contexts/todos.context";

export const AddTodoScreen = ({ navigation }) => {
  const { addTodo } = useContext(TodoContext);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const add = () => {
    setError(null);
    if (!title || !description) {
      console.log("all feilds are required");
      setError("all feilds are required");
      return;
    }
    const id = Math.floor(Math.random() * 10) + "_" + Date.now();
    const todo = {
      id: id,
      title: title,
      description: description,
    };
    addTodo(todo);
    navigation.navigate("HomeScreen")
  };
  return (
    <View style={styles.container}>
      {error && (
        <Text
          style={{
            marginBottom: 10,
            fontSize: 20,
            color: "red",
            fontWeight: "900",
          }}
        >
          {error}
        </Text>
      )}
      <TextInput
        style={styles.title}
        backgroundColor="white"
        placeholder="Title here"
        value={title}
        onChangeText={(t) => setTitle(t)}
      />
      <TextInput
        style={styles.description}
        backgroundColor="white"
        placeholder="Description here"
        value={description}
        onChangeText={(d) => setDescription(d)}
      />
      <Button style={styles.addButton} title="Add todo" onPress={() => add()} />
      <View style={{ padding: 20 }} />
      <BackBtn onPress={() => navigation.goBack()}>Go back</BackBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    paddingTop: 50,
  },
  title: {
    width: "80%",
    marginBottom: 20,
    padding: 15,
    borderRadius: 15,
    fontSize: 20,
  },
  description: {
    width: "80%",
    marginBottom: 20,
    padding: 15,
    borderRadius: 15,
    fontSize: 20,
  },
});
