import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ProjectDetailsScreen = ({ navigation, route }) => {
  const [projectName, setProjectName] = useState('');
  const [projectNumber, setProjectNumber] = useState('');
  const [reportNumber, setReportNumber] = useState('');
  const [workCompleted, setWorkCompleted] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [weather, setWeather] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // If editing, pre-fill the form
  useEffect(() => {
    if (route.params) {
      const {
        projectName,
        projectNumber,
        reportNumber,
        workCompleted,
        targetDate,
        weather,
        index
      } = route.params;

      setProjectName(projectName || '');
      setProjectNumber(projectNumber || '');
      setReportNumber(reportNumber || '');
      setWorkCompleted(workCompleted || '');
      setTargetDate(targetDate || '');
      setWeather(weather || '');
      setEditIndex(index ?? null);
    }
  }, [route.params]);

  const handleNext = () => {
    const updatedProject = {
      projectName,
      projectNumber,
      reportNumber,
      workCompleted,
      targetDate,
      weather
    };

    // Show success message
    if (editIndex !== null) {
      Alert.alert('Success', 'Successfully updated!');
    } else {
      Alert.alert('Success', 'Project added successfully!');
    }

    // Navigate and pass project data + index (if editing)
    navigation.navigate('Details', {
      ...updatedProject,
      index: editIndex
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Project Details</Text>

      <TextInput style={styles.input} placeholder="Project Name" value={projectName} onChangeText={setProjectName} />
      <TextInput style={styles.input} placeholder="Project Number" keyboardType="numeric" value={projectNumber} onChangeText={setProjectNumber} />
      <TextInput style={styles.input} placeholder="Report Number" keyboardType="numeric" value={reportNumber} onChangeText={setReportNumber} />
      <TextInput style={styles.input} placeholder="% of Work Completed (This Month)" keyboardType="numeric" value={workCompleted} onChangeText={setWorkCompleted} />
      <TextInput style={styles.input} placeholder="Target Date (YYYY-MM-DD)" value={targetDate} onChangeText={setTargetDate} />
      <TextInput style={styles.input} placeholder="Weather" value={weather} onChangeText={setWeather} />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: 300, padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  backButton: { position: 'absolute', top: 40, left: 20, backgroundColor: '#ddd', padding: 8, borderRadius: 5 },
  backButtonText: { fontSize: 16, color: '#333' },
  nextButton: { marginTop: 20, backgroundColor: '#007BFF', padding: 12, borderRadius: 5, width: 150, alignItems: 'center' },
  nextButtonText: { color: '#FFF', fontWeight: 'bold' },
});

export default ProjectDetailsScreen;
