import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    try {
      const response = { success: true, message: 'Login successful' };
      if (response.success) {
        Alert.alert('Success', response.message);
        navigation.replace('Dashboard');
      } else {
        Alert.alert('Error', response.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Reset link sent to your email.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
      <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.subtitle}>Account Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Ionicons name={secureText ? 'eye-off' : 'eye'} size={24} color="gray" style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#F0FBFA' },
  title: { fontSize: 40, fontWeight: 'bold', marginBottom: 10, color: '#007BFF' },
  logo: { width: 100, height: 100, marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#555' },
  input: { width: 300, padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 15, backgroundColor: '#fff' },
  passwordContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 5, width: 300, backgroundColor: '#fff' },
  passwordInput: { flex: 1, padding: 10 },
  eyeIcon: { padding: 10 },
  button: { backgroundColor: '#007BFF', padding: 12, borderRadius: 5, width: 300, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  forgotPasswordText: { marginTop: 10, color: 'red', fontSize: 16 },
  linkText: { marginTop: 15, color: '#007BFF', fontSize: 16 },
});

export default LoginScreen;
