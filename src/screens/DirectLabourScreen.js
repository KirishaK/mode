import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DirectLabourScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direct Labour Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0FBFA' },
  text: { fontSize: 20, fontWeight: 'bold', color: '#333' }
});

export default DirectLabourScreen;
