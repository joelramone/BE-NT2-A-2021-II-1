import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ contact }) => {

    useEffect(() => {
        console.log('Renderizo', contact.id)
        return () => {
            //TODO: Investigar ciclo de vida con los componentes virtualizados
            console.log('Desmonto', contact.id)
        }
    }, [])

    return (
        <View style={styles.row}>
            <Text style={styles.text}>{contact.nombre}</Text>
            <Text style={styles.text}>{contact.telefono}</Text>
        </View>
    )
}

const styles =  StyleSheet.create({
    row: {
        padding: 15
    },
    text: {
        fontSize: 20
    }
})