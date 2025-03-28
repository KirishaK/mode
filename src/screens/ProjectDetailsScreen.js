import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ProjectDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Details</Text>
      <TextInput style={styles.input} placeholder="Project Name" />
      <TextInput style={styles.input} placeholder="Project Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Report Number" keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: 300, padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
});

export default ProjectDetailsScreen;
