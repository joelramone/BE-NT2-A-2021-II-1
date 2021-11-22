import React, { useState, useEffect } from 'react';
import { TextInput, View, StyleSheet, Button, KeyboardAvoidingView, Platform } from 'react-native';

export default ({ guardarContacto }) => {

    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [mail, setMail] = useState('')
    const [validated, setValidated] = useState(false)

    useEffect(() => {
        const isValid = (
            nombre
            && telefono
            // && functionToValidateNumber(telef)
        )
        setValidated(isValid)
    }, [nombre, telefono])



    return (
        <View>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput
                    style={styles.input}
                    value={nombre}
                    placeholder={'Nombre y Apellido'}
                    onChangeText={setNombre}
                />
                <TextInput
                    style={styles.input}
                    value={telefono}
                    placeholder={'Telefono'}
                    keyboardType={'phone-pad'}
                    onChangeText={setTelefono}
                />
                <TextInput
                    style={styles.input}
                    value={mail}
                    placeholder={'Mail'}
                    keyboardType={'email-address'}
                    onChangeText={(text) => setMail(text.toLowerCase())}
                />
                               

                <Button
                    title={'Guardar contacto'}
                    onPress={() => guardarContacto({ nombre, telefono })}
                    disabled={!validated}

                />
            </KeyboardAvoidingView>




        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 20,
        minWidth: 20
    }
})
