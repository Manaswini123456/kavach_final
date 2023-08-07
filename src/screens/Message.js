import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const Message = () => {
  const [messageResult, setMessageResult] = useState(null);
  const [inputmessage, setInputMessage] = useState('');
  const [error_for_mess, setErrorForMess] = useState('');
  const [spammessage, setSpamMessage] = useState([]);

  useEffect(() => {
    fetchSpamMessages();
  }, []);

  const fetchSpamMessages = () => {
    axios.get('http://192.168.1.2:3000/api/get-spam-message')
      .then(response => {
        console.log('Spam Messages:', response.data);
        setSpamMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching spam Messages:', error);
      });
  };

  const messagehandle = () => {
    setErrorForMess('');
    axios.post('https://kavach-api.onrender.com/message', { message: inputmessage })
      .then(response => {
        console.log('API Response:', response.data);
        setMessageResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setMessageResult(false);
        setErrorForMess('Something went wrong. Please try again.');
      });
  };

  const handleMarkSpamMessage = () => {
    axios.post('http://192.168.1.2:3000/api/mark-spam-message', { type: 'message', data: inputmessage })
      .then(response => {
        console.log('Spam Marking Response:', response.data);
        fetchSpamMessages(); // Refresh the spam messages list after marking as spam
      })
      .catch(error => {
        console.error('Error marking as spam:', error);
      });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.tableCellIndex]}>{index + 1}</Text>
      <Text style={styles.tableCellData}>{item.data}</Text>
      <Pressable style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Report</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Message</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Report</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
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
            <Text>Spam: {messageResult.result !== undefined ? (messageResult.result ? 'Yes' : 'No') : 'N/A'}</Text>
          </View>
        )}
        <Pressable style={styles.button2} onPress={handleMarkSpamMessage}>
          <Text style={styles.buttonText}>Mark as Spam</Text>
        </Pressable>
        <FlatList
          data={spammessage}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          style={styles.tableContainer}
        />
      </View>
    </ScrollView>
  )
}

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
    color: 'black'
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
  tableContainer: {
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#f2f2f2',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
  },
  tableCellIndex: {
    width: '15%',
  },
  tableCellData: {
    width: '65%',
  },
  reportButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#007BFF',
  },
  reportButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Message;
