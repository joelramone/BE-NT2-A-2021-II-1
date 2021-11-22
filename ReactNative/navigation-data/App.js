import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './components/StackNavigator';
import BottomTabsNavigator from './components/BottomTabsNavigator';
import DrawerNavigator from './components/DrawerNavigator';



export default function App() {



  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <BottomTabsNavigator /> */}
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
