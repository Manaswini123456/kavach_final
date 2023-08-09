import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const BasicCyberCrimes = () => {
  const crimes = [
    {
      title: 'Phishing',
      description: 'Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.',
    },
    {
      title: 'Malware Attacks',
      description: 'Software designed to infiltrate, damage, or gain unauthorized access to computer systems.',
    },
    {
      title: 'Identity Theft',
      description: 'Stealing personal information to impersonate someone else for financial gain.',
    },
    {
      title: 'Ransomware',
      description: 'Holding digital data or systems hostage until a ransom is paid.',
    },
    {
      title: 'Cyberbullying',
      description: 'Harassment, threats, or humiliation of individuals online.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Basic Cyber Crimes</Text>
      <View style={styles.content}>
        <View style={styles.crime}>
          <FontAwesome5 name="exclamation-triangle" size={24} color="#FF5733" />
          <View style={styles.crimeContent}>
            <Text style={styles.crimeTitle}>{crimes[0].title}</Text>
            <Text style={styles.crimeDescription}>{crimes[0].description}</Text>
          </View>
        </View>
        <View style={styles.crime}>
          <FontAwesome5 name="exclamation-triangle" size={24} color="#FF5733" />
          <View style={styles.crimeContent}>
            <Text style={styles.crimeTitle}>{crimes[1].title}</Text>
            <Text style={styles.crimeDescription}>{crimes[1].description}</Text>
          </View>
        </View>
        <View style={styles.crime}>
          <FontAwesome5 name="exclamation-triangle" size={24} color="#FF5733" />
          <View style={styles.crimeContent}>
            <Text style={styles.crimeTitle}>{crimes[2].title}</Text>
            <Text style={styles.crimeDescription}>{crimes[2].description}</Text>
          </View>
        </View>
        <View style={styles.crime}>
          <FontAwesome5 name="exclamation-triangle" size={24} color="#FF5733" />
          <View style={styles.crimeContent}>
            <Text style={styles.crimeTitle}>{crimes[3].title}</Text>
            <Text style={styles.crimeDescription}>{crimes[3].description}</Text>
          </View>
        </View>
        
        <View style={styles.crime}>
          <FontAwesome5 name="exclamation-triangle" size={24} color="#FF5733" />
          <View style={styles.crimeContent}>
            <Text style={styles.crimeTitle}>{crimes[4].title}</Text>
            <Text style={styles.crimeDescription}>{crimes[4].description}</Text>
          </View>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#112244',
    padding:15,

    overflow:"scroll",
    paddingBottom:10,
    position:"relative",
    width:"100%",
    top:650
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  content: {
    flex: 1,
  },
  crime: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  crimeContent: {
    flex: 1,
    marginLeft: 15,
  },
  crimeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  crimeDescription: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
});

export default BasicCyberCrimes;
