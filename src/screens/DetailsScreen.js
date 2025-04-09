import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (route.params) {
      const newProject = route.params;
      const { index } = newProject;
  
      setProjects((prevProjects) => {
        if (index !== undefined && index !== null) {
          // Update existing project
          const updated = [...prevProjects];
          updated[index] = newProject;
          return updated;
        } else {
          // Add new project
          return [...prevProjects, newProject];
        }
      });
    }
  }, [route.params]);
  

  const handleEdit = (index) => {
    const projectToEdit = projects[index];
    navigation.navigate('ProjectDetails', { ...projectToEdit, index });
  };

  const handleDelete = (index) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  const filteredProjects = searchQuery
    ? projects.filter((project) => project.reportNumber.includes(searchQuery))
    : projects;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Project Details Summary</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Report Number"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Project List */}
      <FlatList
        data={filteredProjects}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.detailText}>Project Name: {item.projectName}</Text>
            <Text style={styles.detailText}>Project Number: {item.projectNumber}</Text>
            <Text style={styles.detailText}>Report Number: {item.reportNumber}</Text>
            <Text style={styles.detailText}>% of Work Completed: {item.workCompleted}</Text>
            <Text style={styles.detailText}>Target Date: {item.targetDate}</Text>
            <Text style={styles.detailText}>Weather: {item.weather}</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(index)}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(index)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchBar: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  deleteButton: {
    backgroundColor: '#FF4C4C',
    padding: 10,
    borderRadius: 5,
    width: '48%',
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
