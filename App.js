import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput} from "react-native";

import { Button } from "react-native-paper";
import { Colors } from "react-native-paper";

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import NewScreen from "./screens/NewScreen";
import FirstScreen from "./screens/FirstScreen";
const Stack = createStackNavigator();

export default function App() {
  const [text, setText] = React.useState("");

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={FirstScreen} options={{title : ""}} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{title : "", headerShown: false}} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="New" component={NewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 20, color: "pink" },
});
