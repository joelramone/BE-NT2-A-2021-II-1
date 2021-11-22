import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default ({ navigation }) => {

    // console.log(navigation)

    const [nombre, setNombre] = useState(null)

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />


            <View>
                <Text> This is HOME</Text>
            </View>

            <TextInput 
                value={nombre}
                onChangeText={setNombre}
                placeholder={'Who are you?'}
            />

            <Button
                title={'Go to Details'}
                onPress={() => {
                    navigation.navigate("Details", { nombre: nombre })
                }}
             />

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