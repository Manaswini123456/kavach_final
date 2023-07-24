
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native'; 

 function buttons() {
    const navigation = useNavigation();
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName); // Navigates to the specified screen
      };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Bitcoin Address:</Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigateToScreen('bitcoin')}>
            <Text style={styles.buttonText}>BITCOIN WALLET ADDRESS</Text>
          </TouchableOpacity>
          
        </View>
        <View>
          <Text style={styles.label}>Email ID:</Text>
          <TouchableOpacity style={styles.submitButton} >
            <Text style={styles.buttonText}>EMAIL ID</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>Phone Number:</Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigateToScreen('phone_num')}>
            <Text style={styles.buttonText}>PHONE NUMBER</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>SMS Header & Templates:</Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigateToScreen('sms')}>
            <Text style={styles.buttonText}>SMS HEADER & TEMPLATES</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>UPI Address:</Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigateToScreen('upi')}>
            <Text style={styles.buttonText}>UPI ADDRESS</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.label}>URL Links:</Text>
          <TouchableOpacity style={styles.submitButton} onPress={() => navigateToScreen('url')}>
            <Text style={styles.buttonText}>URL LINKS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginVertical: 20,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      submitButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default buttons