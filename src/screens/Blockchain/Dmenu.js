// src/DropdownSelect.js
import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const DropdownSelect = () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={options[0].value}
        style={styles.picker}
        enabled={false} // Prevent user interaction
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  picker: {
    height: 40,
    width: '100%',
    color: '#555',
  },
});

export default DropdownSelect;
