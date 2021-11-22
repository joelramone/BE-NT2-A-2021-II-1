import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import GlobalContext from '../components/globals/context';


export default function Home({ navigation}) {

    const { AuthData, setAuthData } = useContext(GlobalContext)
    const [nombre, setNombre] = useState(AuthData.nombre)

    console.log("AuthData", AuthData)

    return (
        <View style={styles.container}>
            <View>
                <Text>Nombre: {AuthData.nombre}</Text>
                <Text>Apellido: {AuthData.apellido}</Text>
                <Text>Email: {AuthData.mail}</Text>
            </View>
            <TextInput
                value={nombre}
                onChangeText={setNombre}
             />
             <Button
                title={'Cambiar nombre'}
                onPress={()=>{
                    // setAuthData({...AuthData, nombre: nombre})
                    setAuthData({...AuthData, nombre})
                    navigation.navigate('About')
                }}
              />

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
});
