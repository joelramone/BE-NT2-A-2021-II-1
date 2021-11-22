import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { Constants } from '../../services/constants';

export default ({ navigation, route }) => {

    const { id } = route.params || { id: '' }

    const [vehiculo, setVehiculo] = useState({})

    const getVehiculo = (id) => {
        fetch(`${Constants.BASE_URL}/read/${id}`)
            .then(res => res.json()) // tratamiento de data para convertirlo en un json
            .then(data => {
                setVehiculo(data)
            })
    }

    useEffect(() => {
        // tengo que ir a buscar los vehiculos
        getVehiculo(id)
    }, [])

    // const { nombre } = route.params || { nombre: '' }


    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            {
                (vehiculo.marca !== undefined) ?
                    <View>
                        <Text>Marca: {vehiculo.marca}</Text>
                        <Text>Modelo: {vehiculo.modelo}</Text>
                        <Text>Color: {vehiculo.color}</Text>
                        <Text>Puertas: {vehiculo.puertas}</Text>
                    </View>
                :
                <View>
                    <Text>Loading...</Text>
                </View>
            }


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});