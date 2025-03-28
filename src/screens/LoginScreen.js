import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // For password visibility toggle

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  // Handle login logic
  const handleLogin = () => {
    // Simple validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    // Dummy login check (you can replace this with actual API call)
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Success', 'Login successfully done!');
      navigation.replace('Home');  // Navigate to Home Screen
    } else {
      Alert.alert('Error', 'Something went wrong, please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-MODE</Text>
      <Text style={styles.subtitle}>Account Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIconContainer}>
          <Ionicons
            name={secureText ? 'eye-off' : 'eye'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FBFA',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
    marginBottom: 30,
  },
  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  passwordContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',  // Center content vertically
    marginBottom: 15,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10, // Align the icon properly inside the input
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    width: 300,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 15,
    color: '#007BFF',
    fontSize: 16,
  },
});

export default LoginScreen;
