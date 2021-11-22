import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Constants from "expo-constants";

import CONTACTS from "./utils/contacts";

import { ScrollViewContacts, FlatListContacts, ContactForm } from "./components/ContactsComponents";

export default function App() {

  const [contacts, setContacts] = useState(CONTACTS)

  const [showForm, setShowForm] = useState(false)

  // console.log(contacts)

  const guardarContacto = ({nombre, telefono})=>{
    console.log('Agregar este contacto', nombre, telefono)

    setContacts([
      {
        nombre, telefono, id: contacts.length
      },
      ...contacts      
    ])

    setShowForm(false)
  }

  return (
    <View style={styles.container}>

      {
        (showForm) ?
          <ContactForm guardarContacto={guardarContacto} />
          :
          <View>
            <Button title={'Agregar contacto'} onPress={()=>setShowForm(true)} />
            <Text>Listado de Contactos: ({contacts.length}) elementos</Text>
            {/* <Text>Tamaño status bar: ({Constants.statusBarHeight})</Text> */}

            {/* <ScrollViewContacts contacts={contacts} /> */}

            <FlatListContacts contacts={contacts} />
          </View>
      }



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
