import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000); // Navigate to login after 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/mode.jpg')} style={styles.logo} />
      <Text style={styles.title}>E-MODE</Text>
      <Text style={styles.subtitle}>Manage projects & Workforce Efficiently</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394867',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 150, height: 150 },
  title: { fontSize: 32, color: '#FFF', fontWeight: 'bold', marginTop: 10 },
  subtitle: { fontSize: 16, color: '#FFF' },
});

export default SplashScreen;