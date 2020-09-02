import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Pages/Main";
import Planet from "../Pages/Planet";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Main" component={Main} />
        <Screen name="Planet" component={Planet} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
