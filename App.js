import { Navigation } from "./navigation/naviagtion";
import { NavigationContainer } from "@react-navigation/native";

import { TodoContextProvider } from "./contexts/todos.context";

export default function App() {
  return (
    <NavigationContainer>
      <TodoContextProvider>
        <Navigation />
      </TodoContextProvider>
    </NavigationContainer>
  );
}
