import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/home';
import About from './screens/about';

import GlobalContext, { authData } from "./components/globals/context";
import Login from './screens/login';

export default function App() {

  const [AuthData, setAuthData] = useState({})

  // const [authenticated, setAuthenticated] = useState(true)

  const isAuthenticated = ()=> AuthData.nombre !== undefined

  const Stack = createStackNavigator()
  return (
    <GlobalContext.Provider value={{ AuthData, setAuthData }} >
      <NavigationContainer>
        {
          (isAuthenticated()) ?
            <Stack.Navigator>
              <Stack.Screen name={'Home'} component={Home} />
              <Stack.Screen name={'About'} component={About} />
            </Stack.Navigator>
            :
            <Stack.Navigator>              
              <Stack.Screen name={'Login'} component={Login} />
            </Stack.Navigator>
        }

      </NavigationContainer>
    </GlobalContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
