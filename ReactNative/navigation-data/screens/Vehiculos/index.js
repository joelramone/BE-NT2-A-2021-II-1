import React, { useEffect, useState } from 'react';
import { Button, FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Constants } from '../../services/constants';
import  ExpoConstants  from "expo-constants";


export default ({ navigation }) => {


    const [vehiculos, setVehiculos] = useState([])

    const cargarVehiculos = () => {
        fetch(`${Constants.BASE_URL}/read`)
            .then(res => res.json()) // tratamiento de data para convertirlo en un json
            .then(data => {
                // console.log(data)

                setVehiculos(data)
            })
    }

    useEffect(() => {
        // tengo que ir a buscar los vehiculos
        cargarVehiculos()
    }, [])

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <Text style={styles.title}>Lista de Vehiculos</Text>
            <FlatList
                data={vehiculos}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Details', {id: item.id})}
                            
                        >
                            <View style={styles.vehiculo}>
                                <Text>{item.marca} - {item.modelo}</Text>
                            </View>
                        </TouchableOpacity>

                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: ExpoConstants.statusBarHeight
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20
    },
    vehiculo: {
        padding: 15,
        borderBottomWidth: 1
        // marginTop: 1
    }
});