import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

const Phone = () => {
  const [phoneinput, setphoneInput] = useState('');
  const [phoneresult, setphoneResult] = useState(null);
  const [error_phone, setErrorPhone] = useState('');
  const [spamPhone, setSpamPhone] = useState([])

  useEffect(()=>{
    fetchSpamPhone();
  },[]);

  const fetchSpamPhone = () => {
    axios.get('http://192.168.1.2:3000/api/get-spam-phone').then(response=>{
      setSpamPhone(response.data);
    }).catch(error=>{
      console.error('Error fetching spam phone numbers:', error);
    });
  }

  const phonehandle = () => {
    setErrorPhone('');
    axios.get('https://kavachallapi-production.up.railway.app/phone/query/' + phoneinput)
      .then(response => {
        console.log('API Response:', response.data);
        setphoneResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setphoneResult(false);
        setErrorPhone('Something went wrong. Please try again.');
      });
  };

  const handleMarkSpamPhone = () => {
    setErrorPhone('');

    // Request for marking as spam
    const markSpamRequest = axios.post('http://192.168.1.2:3000/api/mark-spam-phone', { type: 'phone', data: phoneinput });

    const flagSpamRequest = axios.put(`https://kavachallapi-production.up.railway.app/phone/flag_spam/${phoneinput}`);

    axios.all([markSpamRequest, flagSpamRequest]).then(axios.spread((...responses) => {
      const markSpamResponse = responses[0];
      const flagSpamResponse = responses[1];

      console.log('Mark Spam Response:', markSpamResponse.data);
      console.log('Flag Spam Response:', flagSpamResponse.data);

      fetchSpamPhone();
    })).catch(errors => {
      console.error('Error marking phone number as spam:', errors);
      setErrorPhone('Something went wrong. Please try again.');
    });
  }

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
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Phone Number</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Spam Marked</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Report</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>FOR PHONE NUMBERS</Text>
        <TextInput
            style={styles.input}
            value={phoneinput}
            onChangeText={text => setphoneInput(text)}
            placeholder="Enter Phone Number"
            placeholderTextColor="#666"
          />
          <Pressable style={styles.button} onPress={phonehandle} >
            <Text style={styles.buttonText}>Submit Phone Number</Text>
          </Pressable>
          {error_phone ? (
            <Text style={styles.errorText}>{error_phone}</Text>
          ) : null}
          {phoneresult !== null && (
            <View style={styles.resultContainer}>
              <Text>Number: {phoneinput}</Text>
              <Text>Carrier: {phoneresult.carrier !== undefined ? phoneresult.carrier : 'N/A'}</Text>
              <Text>Spam: {phoneresult.is_spam.toString()}</Text>
              <Text>Number of Spam Marks: {phoneresult.spam_marks !== undefined ? phoneresult.spam_marks : 'N/A'}</Text>
              <Text>Origin: {phoneresult.phone_region !== undefined ? phoneresult.phone_region : 'N/A'}</Text>
            </View>
          )}
          <Pressable style={styles.button2} onPress={handleMarkSpamPhone} >
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>

          {/* Table to display spam marked phone numbers */}
          <FlatList
            data={spamPhone}
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
})

export default Phone;
