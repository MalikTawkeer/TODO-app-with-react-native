import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { TodoRowView } from "../../components/todoRowView";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "project meeting",
      description: "i have to be there fast",
      status: false,
    },
    {
      id: 2,
      title: "client meet",
      description: "i have to be there fast",
      status: false,
    },
    {
      id: 3,
      title: "deployments",
      description: "i have to be there fast",
      status: false,
    },
  ]);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.searchInput}
          backgroundColor="white"
          placeholder="Search"
          width="60%"
        />
        <Text style={styles.header}>Notes</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TodoDetailsScreen", { todo: item })
              }
            >
              <TodoRowView
                title={item.title}
                description={item.description}
                status={item.status}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
        <Ionicons
          style={{ textAlign: "right" , paddingRight: 20}}
          name="add-circle-sharp"
          size={65}
          color="blue"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    backgroundColor: "pink",
  },
  searchInput: {
    marginLeft: 10,
    borderRadius: 20,
    fontSize: 20,
    padding: 12,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 20,
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: "white",
    height: "82%",
    padding: 5,
  },
});
