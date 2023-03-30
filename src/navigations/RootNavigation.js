import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AddLinkScreen } from "../screens/AddLinkScreen";
import { LinkStackNavigation } from "./LinkStackNavigation";

const Stack = createNativeStackNavigator();

export const Rootnavigation = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name='LinkStack' component={LinkStackNavigation}/>
      <Stack.Screen name='AddLink' component={AddLinkScreen}/>
    </Stack.Navigator>
  )
}