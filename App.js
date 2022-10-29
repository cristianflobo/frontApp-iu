import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  { Login}   from './src/screens/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={TengoCuenta} /> */}
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} />
        <Stack.Screen name="Desktop" component={Desktop} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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
