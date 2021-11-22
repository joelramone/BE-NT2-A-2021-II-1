import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

export default function App() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '572246048006-l6kh0lti06j6n1gle4q1uefdka0j0hf5.apps.googleusercontent.com',
    iosClientId: '572246048006-80da58eav5q7ch3leecpquheu754bulf.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('authentication Data', authentication)

      // llamar a la API de google para traerme info del usuario
      // https://www.googleapis.com/oauth2/v1/userinfo?access_token=$%7Bauthentication.accessToken%7D
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`)
      .then(res => res.json())
      .then(data=>{
        console.log('User data', data)
      })
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Welcome to my App</Text>
      <StatusBar style="auto" />
      <Button
        disabled={!request}
        title="Login con Google"
        onPress={() => {
          promptAsync();
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
