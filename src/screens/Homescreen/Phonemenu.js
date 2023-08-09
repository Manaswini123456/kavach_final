import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Url from '../Url';
import Phone from '../Phone';
import Message from '../Message';
import Upi from '../Upi';
import Message_header from '../Message_header';
import Blockchain from '../Blockchain';
import Scanner from '../scanner';

const Phonemenu = () => {
  const navigation = useNavigation();

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const renderBox = (iconName, text, pageName) => {
    return (
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(pageName)}>
        <AntDesign name={iconName} size={40} color="#333" />
        <Text style={styles.boxText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The Safety Menu</Text>
      </View>
      <View style={styles.boxRow}>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Url)}>
      <MaterialCommunityIcons name="shield-link-variant-outline" size={40} color="#112244" />
        <Text style={styles.boxText}>URL Checker</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Phone)}>
       <Feather name="phone-call" size={40} color="#112244" />
        <Text style={styles.boxText}>Phone Checker</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.boxRow}>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Message)}>
      <MaterialIcons name="sms-failed" size={40} color="#112244" />
        <Text style={styles.boxText}>SMS Checker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Upi)}>
      <MaterialIcons name="payment" size={40} color="#112244" />
        <Text style={styles.boxText}>UPI Checker</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.boxRow}>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Blockchain)}>
      <Entypo name="database" size={40} color="#112244" />
        <Text style={styles.boxText}>Blockchain Checker</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Message_header)}>
      <MaterialIcons name="sms" size={40} color="#112244" />
        <Text style={styles.boxText}>Header Checker</Text>
      </TouchableOpacity> 
      
    
      </View>
      <View style={styles.boxRow}>
      <TouchableOpacity style={styles.box} onPress={() => navigateToPage(Scanner)}>
      <Entypo name="database" size={40} color="#112244" />
        <Text style={styles.boxText}>UPI  Scanner</Text>
      </TouchableOpacity>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    width:"100%"
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  box: {
    alignItems: 'center',
    justifyContent:"center",
    elevation: 3,
    shadowColor: 'rgba(17, 34, 68, 1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius:5,
    backgroundColor: '#FFF',
    width:"42%",
    height:"80%",
    paddingVertical:10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000', // Black shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // Lower opacity for a soft effect
    shadowRadius: 5, // Smaller shadow radius
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  boxText: {
    marginTop: 10,
    fontSize: 16,
    color: '#112244',
  },
});

export default Phonemenu;
