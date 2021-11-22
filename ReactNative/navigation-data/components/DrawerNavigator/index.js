import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';



export default function DrawerNavigator() {

    // const isOpen = useDrawerStatus()

    const Drawer = createDrawerNavigator()
  
    return (
        // <Stack.Navigator initialRouteName={'Dashboard'}>
        //   <Stack.Screen name={'Dashboard'} component={Home}/>
        //   <Stack.Screen name={'Details'} component={Details}/>          
        // </Stack.Navigator>

        <Drawer.Navigator>
            <Drawer.Screen name={'Dashboard'} component={Home}/>
            <Drawer.Screen name={'Details'} component={Details}/>
        </Drawer.Navigator>
    );
  }