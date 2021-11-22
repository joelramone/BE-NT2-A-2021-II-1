import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

import Home from '../../screens/Home';
import Details from '../../screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BottomTabsNavigator() {


    const Tabs = createBottomTabNavigator()
  
    return (
        // <Stack.Navigator initialRouteName={'Dashboard'}>
        //   <Stack.Screen name={'Dashboard'} component={Home}/>
        //   <Stack.Screen name={'Details'} component={Details}/>          
        // </Stack.Navigator>

        <Tabs.Navigator>
            <Tabs.Screen name={'Dashboard'} component={Home} options={{ title: 'My home', headerShown: false }}/>
            <Tabs.Screen name={'Details'} component={Details}/>  
        </Tabs.Navigator>
    );
  }