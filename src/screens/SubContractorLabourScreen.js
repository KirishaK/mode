import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SubContractorDetailsScreen = () => {
  const [name, setName] = useState('');
  const [qtyWork, setQtyWork] = useState('');
  const [hours, setHours] = useState('03');
  const [description, setDescription] = useState('');
  const [dailyWage, setDailyWage] = useState('');
  const [workers, setWorkers] = useState('');
  const [valueDone, setValueDone] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sub Contractor Details</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="QTY work"
        style={styles.input}
        value={qtyWork}
        onChangeText={setQtyWork}
        keyboardType="numeric"
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={hours}
          style={styles.picker}
          onValueChange={(itemValue) => setHours(itemValue)}
        >
          <Picker.Item label="01" value="01" />
          <Picker.Item label="02" value="02" />
          <Picker.Item label="03" value="03" />
          <Picker.Item label="04" value="04" />
          <Picker.Item label="05" value="05" />
        </Picker>
      </View>

      <TextInput
        placeholder="Description of work"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Daily Wage"
        style={styles.input}
        value={dailyWage}
        onChangeText={setDailyWage}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="#Workers"
        style={styles.input}
        value={workers}
        onChangeText={setWorkers}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Value of work done"
        style={styles.input}
        value={valueDone}
        onChangeText={setValueDone}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.fab}>
        <Icon name="add" size={28} color="#fff" />
        <Text style={styles.fabLabel}>Add</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    color: '#007AFF',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 20,
    paddingVertical: 8,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  pickerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    elevation: 5,
  },
  fabLabel: {
    color: '#fff',
    fontSize: 10,
    marginTop: 2,
  },
});

export default SubContractorDetailsScreen;
