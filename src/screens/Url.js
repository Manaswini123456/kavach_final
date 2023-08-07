import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const Url = () => {
  const [inputData, setInputData] = useState('');
  const [apiResult, setApiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [spamUrls, setSpamUrls] = useState([]);

  useEffect(() => {
    fetchSpamUrls();
  }, []);

  const fetchSpamUrls = () => {
    axios.get('http://192.168.1.2:3000/api/get-spam-url')
      .then(response => {
        console.log('Spam URLs:', response.data);
        setSpamUrls(response.data);
      })
      .catch(error => {
        console.error('Error fetching spam URLs:', error);
      });
  };

  const handleAPICall = () => {
    setErrorMessage('');
    axios.post('https://kavach-api.onrender.com/url', { url: inputData })
      .then(response => {
        console.log('API Response:', response.data);
        setApiResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setApiResult(null);
        setErrorMessage('Something went wrong. Please try again.');
      });
  };

  const handleMarkSpamURL = () => {
    axios.post('http://192.168.1.2:3000/api/mark-spam', { type: 'url', data: inputData })
      .then(response => {
        console.log('Spam Marking Response:', response.data);
        fetchSpamUrls();
      })
      .catch(error => {
        console.error('Error marking as spam:', error);
      });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.tableCellIndex]}>{index + 1}</Text>
      <View style={styles.tableCellDataContainer}>
        <Text style={styles.tableCellData}>{item.data}</Text>
        <Pressable style={styles.reportButton} onPress={() => handleReportSpam(item._id)}>
          <Text style={styles.reportButtonText}>Report</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>URL</Text>
    </View>
  );

  return (
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
          <Text>Malware: {apiResult.malware ? 'Yes' : 'No'}</Text>
          <Text>Phishing: {apiResult.phishing ? 'Yes' : 'No'}</Text>
          <Text>Suspicious: {apiResult.suspicious ? 'Yes' : 'No'}</Text>
        </View>
      )}
      <Pressable style={styles.button2} onPress={handleMarkSpamURL}>
        <Text style={styles.buttonText}>Mark as Spam</Text>
      </Pressable>
      <ScrollView style={styles.tableScrollView} contentContainerStyle={styles.tableContainer}>
        <View>
          <FlatList
            data={spamUrls}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
          />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
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
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  tableScrollView: {
    flex: 1,
    width: '100%', // Set the width to 100% to occupy the entire container
  },
  tableContainer: {
    flexGrow: 1,
    marginTop: 20,
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
  tableCellDataContainer: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tableCellData: {
    fontSize: 14,
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
export default Url;
