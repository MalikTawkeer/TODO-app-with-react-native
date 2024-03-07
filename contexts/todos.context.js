import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const saveTodos = async () => {
    if (todos.length > 0) {
      await AsyncStorage.setItem("todos", JSON.stringify(todos));
    }
  };
  const retriveTodos = async () => {
    const res = await AsyncStorage.getItem("todos");
    if (res) {
      setTodos(JSON.parse(res));
    }
  };

  useEffect(() => {
    saveTodos();
  }, [todos]);
  useEffect(() => {
    retriveTodos();
  }, []);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{ addTodo, todos, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
