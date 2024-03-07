import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../features/screens/home.screen";
import { TodoDetailsScreen } from "../features/screens/todo.details.screen";
import { AddTodoScreen } from "../features/screens/add.todo.screen";

const homeStack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <homeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <homeStack.Screen name="HomeScreen" component={HomeScreen} />
      <homeStack.Screen
        name="TodoDetailsScreen"
        component={TodoDetailsScreen}
      />
      <homeStack.Screen name="AddTodoScreen" component={AddTodoScreen} />
    </homeStack.Navigator>
  );
};
