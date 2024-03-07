import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
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

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter({})
  };

  return (
    <TodoContext.Provider value={{ addTodo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};
