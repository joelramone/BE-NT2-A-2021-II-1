import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import GlobalContext, { authData } from '../components/globals/context';


export default function Login({ navigation }) {

    const { AuthData, setAuthData } = useContext(GlobalContext)

    const login = () => {
        setAuthData(authData)
    }
    

    return (
        <View style={styles.container}>

            <Text>Login Page</Text>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={login}
            >
                <Image
                source={require('../assets/google-signin-button-1024x260.png')} 
                style={styles.buttonImageIconStyle}
                />
                
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonImageIconStyle:{
        resizeMode: 'stretch',
        width: 200,
        height: 58,
    }
});
