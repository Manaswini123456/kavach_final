import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';

const Chatbot = () => {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    try {
      const prompt = textInput;
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const text = response.data.choices[0].text;
      setData([...data, { type: 'user', text: textInput }, { type: 'bot', text: text }]);
      setTextInput('');
    } catch (error) {
      console.error('API Error:', error.message);
      
      Alert.alert(
        'Error',
        'There was an error processing your request. Please try again later.',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.chat}
          contentContainerStyle={styles.chatContent}
          renderItem={({ item }) => (
            <View style={[styles.message, { alignSelf: item.type === 'user' ? 'flex-start' : 'flex-end' }]}>
              <Text style={[styles.messageText, { color: item.type === 'user' ? 'green' : 'red' }]}>
                {item.type === 'user' ? 'You:🧑‍🦰' : 'Bot:🤖 '}
              </Text>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder='Ask me anything...'
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  chat: {
    flexGrow: 1,
  },
  chatContent: {
    padding: 10,
  },
  message: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Chatbot;
