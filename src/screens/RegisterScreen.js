import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [job, setJob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [confirmSecureText, setConfirmSecureText] = useState(true);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword || !job || !mobileNumber) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME</Text>
       <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.subtitle}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />

      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={secureText} value={password} onChangeText={setPassword} />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={styles.eyeIconContainer}>
          <Ionicons name={secureText ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry={confirmSecureText} value={confirmPassword} onChangeText={setConfirmPassword} />
        <TouchableOpacity onPress={() => setConfirmSecureText(!confirmSecureText)} style={styles.eyeIconContainer}>
          <Ionicons name={confirmSecureText ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Job" value={job} onChangeText={setJob} />
      <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" value={mobileNumber} onChangeText={setMobileNumber} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F0FBFA' },
  title: { fontSize: 40, fontWeight: 'bold', marginBottom: 10, color: '#007BFF' },
  logo: { width: 100, height: 100, marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, color: '#555' },
  input: { width: 300, padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  passwordContainer: { width: 300, flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  eyeIconContainer: { position: 'absolute', right: 10, top: 10 },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, width: 300, alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  link: { color: '#007BFF', marginTop: 10 },
});

export default RegisterScreen;
