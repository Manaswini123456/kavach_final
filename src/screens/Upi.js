import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

const Upi = () => {
  const [upiinput, setupiInput] = useState('');
  const [upiresult, setupiResult] = useState(null);
  const [error_upi, setErrorUpi] = useState('');
  const [spamUPIs, setSpamUPIs] = useState([]);

  useEffect(() => {
    fetchSpamUPIs();
  }, []);

  const fetchSpamUPIs = () => {
    axios.get('http://192.168.1.2:3000/api/get-spam-upi')
      .then(response => {
        // console.log('Spam UPIs:', response.data);
        setSpamUPIs(response.data);
      })
      .catch(error => {
        console.error('Error fetching spam UPIs:', error);
      });
  };

  const upihandle = () => {
    setErrorUpi('');
    axios.get(`https://kavachallapi-production.up.railway.app/upi/${upiinput}`)
      .then(response => {
        console.log('API Response:', response.data);
        setupiResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setupiResult(false);
        setErrorUpi('Something went wrong. Please try again.');
      });
  };

  const handleMarkSpamUPI = () => {
    setErrorUpi('');

    // Request for marking as spam
    const markSpamRequest = axios.post('http://192.168.1.2:3000/api/mark-spam-upi', { type: 'upi', data: upiinput });

    // Concurrent requests to flag as ham and spam (replace {upiid} with the actual upi id)
    const flagHamRequest = axios.put(`https://kavachallapi-production.up.railway.app/upi/flag_ham/${upiinput}`);
    const flagSpamRequest = axios.put(`https://kavachallapi-production.up.railway.app/upi/flag_spam/${upiinput}`);

    // Send all requests together using axios.all
    axios.all([markSpamRequest, flagHamRequest, flagSpamRequest])
      .then(axios.spread((markSpamResponse, flagHamResponse, flagSpamResponse) => {
        console.log('Spam Marking Response:', markSpamResponse.data);
        console.log('Flag Ham Response:', flagHamResponse.data);
        console.log('Flag Spam Response:', flagSpamResponse.data);
        fetchSpamUPIs(); // Fetch updated spam UPIs after marking spam
      }))
      .catch(errors => {
        console.error('Error in one or more requests:', errors);
      });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.tableCellIndex]}>{index + 1}</Text>
      <Text style={[styles.tableCell, styles.tableCellData]}>{item.data}</Text>
      <Pressable style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Report</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>UPI ID</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Spam Marked</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Report</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
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
            <Text>Name: {upiresult.name !== undefined ? upiresult.name : 'N/A'}</Text>
            <Text>UPI ID: {upiresult.upi_id}</Text>
            <Text>Spam_Mark: {upiresult.spam_mark !== undefined ? upiresult.spam_mark : 'N/A'}</Text>
            <Text>Ham_Mark: {upiresult.ham_mark !== undefined ? upiresult.ham_mark : 'N/A'}</Text>
          </View>
        )}
        <Pressable style={styles.button2} onPress={handleMarkSpamUPI}>
          <Text style={styles.buttonText}>Mark as Spam</Text>
        </Pressable>
        <FlatList
          data={spamUPIs}
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
    width: '80%',
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
    width: '55%',
  },
  reportButton: {
    flex: 1,
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

export default Upi;
