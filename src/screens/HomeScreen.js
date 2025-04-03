import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); 
  }, []);

  return (
    <ImageBackground source={require('../../assets/emode.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to E-MODE</Text>
        <Text style={styles.subtitle}>Manage projects & Workforce Efficiently</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'center' },
  overlay: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 20 },
  subtitle: {
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#FFD700', 
    textAlign: 'center', 
    marginBottom: 20,
  },
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
