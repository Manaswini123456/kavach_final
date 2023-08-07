import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';

const InputForm = () => {
 
  const [headerinput, setheaderInput] = useState('');
  const [mess_header_input, setmess_header_input] = useState('');
  const [headerresult, setheaderResult] = useState(null);
  const [error_header, setErrorHeader] = useState('');


  

  

  const headerhandle = () => {
    setErrorHeader('');
    axios.get(`https://kavachallapi-production.up.railway.app/sms_header/${headerinput}`,{
      params:{
        message: mess_header_input
      }
    })
      .then(response => {
        console.log('API Response:', response.data);
        setheaderResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setheaderResult(false);
        setErrorHeader('Something went wrong. Please try again.');
      });
  };


  

  return (
    <ImageBackground source={require("../../assets/background.jpg")} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          

          

          


          <Text style={styles.title}>FOR SMS HEADERS</Text>
          <TextInput
            style={styles.input}
            value={headerinput}
            onChangeText={text => setheaderInput(text)}
            placeholder="Enter Header"
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            value={mess_header_input}
            onChangeText={text => setmess_header_input(text)}
            placeholder="Enter Message"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={headerhandle} >
            <Text style={styles.buttonText}>Submit Header</Text>
          </Pressable>
          {error_header ? (
            <Text style={styles.errorText}>{error_header}</Text>
          ) : null}
          {headerresult !== null && (
            <View style={styles.resultContainer}>
              <Text>Name: {headerresult.name !== undefined ? headerresult.name : 'N/A'}</Text>
              <Text>Spam: {headerresult.is_spam !== undefined ? (headerresult.is_spam ? 'Yes' : 'No') : 'N/A'}</Text>
              <Text>Number of spam: {headerresult.number_of_spam_marks !== undefined ? headerresult.number_of_spam_marks : 'N/A'}</Text>
            </View>
          )}

          <Pressable style={styles.button2} >
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'gray',
    paddingHorizontal: 20,
    color: 'black',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'black',
    width: '80%',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'darkred',
    width: '80%',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default InputForm;
