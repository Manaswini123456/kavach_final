import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HowToPreventCybercrime = () => {
  const preventions = [
    'Use strong and unique passwords for each account.',
    'Enable two-factor authentication whenever possible.',
    'Regularly update your software and devices.',
    'Be cautious of suspicious emails and links.',
    'Avoid sharing personal information on public platforms.',
    'Use a reputable antivirus and security software.',
    'Keep your operating system and apps up to date.',
    'Educate yourself about common cyber threats.',
    'Use a secure and encrypted Wi-Fi connection.',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How to Prevent Cybercrime?</Text>
      <View style={styles.content}>
        {preventions.map((prevention, index) => (
          <View key={index} style={styles.prevention}>
            <MaterialCommunityIcons name="shield-check" size={24} color="#2ECC71" />
            <Text style={styles.preventionText}>{prevention}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 0,
    top:300,
    position:"relative",
    paddingBottom:350
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  content: {
    flexDirection: 'column',
  },
  prevention: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  preventionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#555',
  },
});

export default HowToPreventCybercrime;
