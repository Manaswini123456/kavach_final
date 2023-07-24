import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const InputForm = () => {
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [sms, setSms] = useState('');
  const [email, setEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [upi, setUpi] = useState('');

  const [bitcoinResult, setBitcoinResult] = useState('');
  const [smsResult, setSmsResult] = useState('');
  const [emailResult, setEmailResult] = useState('');
  const [websiteLinkResult, setWebsiteLinkResult] = useState('');
  const [phoneNumberResult, setPhoneNumberResult] = useState('');
  const [upiResult, setUpiResult] = useState('');

  const handleSubmit = () => {
    setBitcoinResult(bitcoinAddress);
    setSmsResult(sms);
    setEmailResult(email);
    setWebsiteLinkResult(websiteLink);
    setPhoneNumberResult(phoneNumber);
    setUpiResult(upi);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.label}>Bitcoin Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Bitcoin address"
          value={bitcoinAddress}
          onChangeText={(text) => setBitcoinAddress(text)}
        />
        <Text style={styles.result}>Result: {bitcoinResult}</Text>
      </View>

      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.result}>Result: {emailResult}</Text>
      </View>

      <View>
        <Text style={styles.label}>SMS:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number for SMS"
          value={sms}
          onChangeText={(text) => setSms(text)}
        />
        <Text style={styles.result}>Result: {smsResult}</Text>
      </View>

      <View>
        <Text style={styles.label}>Website Links:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the website link"
          value={websiteLink}
          onChangeText={(text) => setWebsiteLink(text)}
        />
        <Text style={styles.result}>Result: {websiteLinkResult}</Text>
      </View>

      <View>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Text style={styles.result}>Result: {phoneNumberResult}</Text>
      </View>

      <View>
        <Text style={styles.label}>UPI:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your UPI address"
          value={upi}
          onChangeText={(text) => setUpi(text)}
        />
        <Text style={styles.result}>Result: {upiResult}</Text>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  result: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 15,
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
});

export default InputForm;
