import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-MODE Login</Text>
      <TextInput style={styles.input} placeholder="Enter Email" />
      <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Home')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: 300, padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default LoginScreen;
