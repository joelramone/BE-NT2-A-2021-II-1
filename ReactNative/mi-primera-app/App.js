import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('Daniel')

  return (
    <View style={styles.container}>
      <Text>Hola {name}! Esta es mi primera App</Text>
      <Button title={'Hola mundo'} />
      <StatusBar style="auto" />
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
