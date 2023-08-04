import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';

const InputForm = () => {
  const [inputData, setInputData] = useState('');
  const [apiResult, setApiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(''); //for url

  const [messageResult, setMessageResult] = useState(null);
  const [inputmessage, setInputMessage] = useState('');
  const [error_for_mess, setErrorForMess] = useState(''); //for message

  const [upiinput, setupiInput] = useState('');
  const [upiresult, setupiResult] = useState(null);
  const [error_upi, setErrorUpi] = useState(''); //for upi

  const[phoneinput, setphoneInput] = useState('');
  const [phoneresult, setphoneResult] = useState(null);
  const [error_phone, setErrorPhone] = useState(''); //for phone

  const handleAPICall = () => {
    setErrorMessage(''); // Clear any previous error message

    // Make an API request with the inputData
    axios.post('https://kavach-api.onrender.com/url', { url: inputData })
      .then(response => {
        console.log('API Response:', response.data);
        setApiResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setApiResult(null); // Clear the previous API result if there was any
        setErrorMessage('Something went wrong. Please try again.');
      });
  };

  const messagehandle = () => {
    setErrorForMess(''); // Clear any previous error message
    axios.post('https://kavach-api.onrender.com/message', { message: inputmessage })
      .then(response => {
        console.log('API Response:', response.data);
        setMessageResult(response.data); // Assuming the API response has a structure like: { spam: true/false }
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setMessageResult(false); // Set the messageResult to false if there was an error
        setErrorForMess('Something went wrong. Please try again.');
      });
  };

  const upihandle = () => {
    setErrorUpi(''); // Clear any previous error message
    axios.get(`https://kavachallapi-production.up.railway.app/upi/${upiinput}`)
      .then(response => {
        console.log('API Response:', response.data);
        setupiResult(response.data); // Assuming the API response has a structure like: { spam: true/false }
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setupiResult(false); // Set the messageResult to false if there was an error
        setErrorUpi('Something went wrong. Please try again.');
      });
  }

  const phonehandle = () => {
    setErrorPhone('');
    axios.get('https://kavachallapi-production.up.railway.app/phone/query', {
      params: { phone_number: phoneinput }
    })
    .then(response => {
      console.log('API Response:', response.data);
      setphoneResult(response.data);
    })
    .catch(error => {
      console.error('Error fetching data from API:', error);
      setphoneResult(false);
      setErrorPhone('Something went wrong. Please try again.')
    });
  }
  
  
  
  const handleMarkSpamURL = () => {
    // Call your server API to mark and store the URL as spam
    axios.post('http://192.168.1.4:3000/api/mark-spam', { type: 'url', data: inputData })
      .then(response => {
        console.log('Spam Marking Response:', response.data);
        // Handle the response if needed
      })
      .catch(error => {
        console.error('Error marking as spam:', error);
        // Handle the error if needed
      });
  };

  const handleMarkSpamMessage = () => {
    axios.post('http://192.168.1.4:3000/api/mark-spam-message', { type: 'message', data: inputmessage })
      .then(response => {
        console.log('Spam Marking Response:', response.data);
        // Handle the response if needed
      }).catch(error => {
        console.error('Error marking as spam:', error);
        // Handle the error if needed
      })
  }

  const handleMarkSpamUPI = () => {
    axios.post('http://192.168.1.4:3000/api/mark-spam-upi', { type: 'upi', data: upiinput })
      .then(response => {
        console.log('Spam Marking Response:', response.data);
        // Handle the response if needed
      }).catch(error => {
        console.error('Error marking as spam:', error);
        // Handle the error if needed
      })
  }

  

  return (
    <ImageBackground source={require("../../assets/background.jpg")} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>FOR URL LINKS</Text>
          <TextInput
            style={styles.input}
            value={inputData}
            onChangeText={text => setInputData(text)}
            placeholder="Enter URL"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={handleAPICall}>
            <Text style={styles.buttonText}>Submit URL</Text>
          </Pressable>
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
          {apiResult && (
            <View style={styles.resultContainer}>
              <Text>Malware: {apiResult.malware.toString()}</Text>
              <Text>Phishing: {apiResult.phishing.toString()}</Text>
              <Text>Suspicious: {apiResult.suspicious.toString()}</Text>
            </View>
          )}
          <Pressable style={styles.button2} onPress={handleMarkSpamURL}>
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>

          <Text style={styles.title}>FOR MESSAGES</Text>
          <TextInput
            style={styles.input}
            value={inputmessage}
            onChangeText={text => setInputMessage(text)}
            placeholder="Enter message"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={messagehandle}>
            <Text style={styles.buttonText}>Submit Message</Text>
          </Pressable>
          {error_for_mess ? (
            <Text style={styles.errorText}>{error_for_mess}</Text>
          ) : null}
          {messageResult !== null && (
            <View style={styles.resultContainer}>
              <Text>Spam: {messageResult.result ? 'Yes' : 'No'}</Text>
            </View>
          )}
          <Pressable style={styles.button2} onPress={handleMarkSpamMessage}>
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>

          <Text style={styles.title}>FOR UPI RESULTS</Text>
          <TextInput
            style={styles.input}
            value={upiinput}
            onChangeText={text => setupiInput(text)}
            placeholder="Enter UPI"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={upihandle}>
            <Text style={styles.buttonText}>Submit UPI</Text>
          </Pressable>
          {error_upi ? (
            <Text style={styles.errorText}>{error_upi}</Text>
          ) : null}
          {upiresult !== null && (
            <View style={styles.resultContainer}>
              <Text>Name: {upiresult.name}</Text>
              <Text>Spam_Mark : {upiresult.spam_mark}</Text>
              <Text>Ham_Mark : {upiresult.ham_mark}</Text>
            </View>
          )}
          <Pressable style={styles.button2} onPress={handleMarkSpamUPI}>
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>
          <Text style={styles.title}>FOR PHONE NUMBERS</Text>
          <TextInput
            style={styles.input}
            value={phoneinput}
            onChangeText={text=>setphoneInput(text)}
            placeholder="Enter Phone Number"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={phonehandle} >
            <Text style={styles.buttonText}>Submit Phone Number</Text>
            </Pressable>
          {error_phone ? (
            <Text style={styles.errorText}>{error_phone}</Text>
          ) : null}
          {phoneresult!==null && (
            <View style={styles.resultContainer}>
              <Text>Number : {phoneinput}</Text>
              <Text>Carrier : {phoneresult.carrier}</Text>
              <Text>Spam : {phoneresult.is_spam}</Text>
              <Text>Number of Spam Marks : {phoneresult.spam_marks}</Text>
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
