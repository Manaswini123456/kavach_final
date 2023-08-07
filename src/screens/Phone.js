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
    axios.get('http://192.168.0.107:3000/api/get-spam-phone').then(response=>{
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
    const markSpamRequest = axios.post('http://192.168.0.107:3000/api/mark-spam-phone', { type: 'phone', data: phoneinput });

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
      <Text style={[styles.tableCell, styles.tableCellIndex , {right:35 , top:10}]}>{index + 1}</Text>
      <Text style={[styles.tableCell, styles.tableCellData , {right:55 , top:10}]}>{item.data}</Text>
      <Pressable style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Report</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Phone Number</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell , {right:-10}] }>Report</Text>
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
          <View style={styles.buttonCont}>
          <Pressable style={styles.button} onPress={phonehandle} >
            <Text style={styles.buttonText}>Check Number</Text>
          </Pressable>
          <Pressable style={styles.button2} onPress={handleMarkSpamPhone} >
            <Text style={styles.buttonText}>Mark as Spam</Text>
          </Pressable>
          </View>
          
          {error_phone ? (
            <Text style={styles.errorText}>{error_phone}</Text>
          ) : null}
          {phoneresult !== null && (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Number: {phoneinput}</Text>
              <Text style={styles.resultText}>Carrier: {phoneresult.carrier !== undefined ? phoneresult.carrier : 'N/A'}</Text>
              <Text style={styles.resultText}>Spam: {phoneresult.is_spam.toString()}</Text>
              <Text style={styles.resultText}>Number of Spam Marks: {phoneresult.spam_marks !== undefined ? phoneresult.spam_marks : 'N/A'}</Text>
              <Text style={styles.resultText}>Origin: {phoneresult.phone_region !== undefined ? phoneresult.phone_region : 'N/A'}</Text>
            </View>
          )}
       

          {/* Table to display spam marked phone numbers */}
          <FlatList
            data={spamPhone}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            style={[styles.tableContainer]}
          />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
    color: "black",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    paddingHorizontal: 10,
    color: "black",
    marginBottom: 20,
    fontSize: 16,
  },
  buttonCont: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#112244",
    width: "48%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,

    marginTop: 0,
    fontWeight: "bold",
  },
  button2: {
    backgroundColor: "#B80F0A",
    width: "48%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,

    marginTop: 0,
    fontWeight: "bold",
    marginLeft: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  resultContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    display: "flex",
  },
  resultText: {
    margin: 5,
    fontSize: 18,
  },
  resultIcon: {
    position: "relative",
    top: 2.5,
  },
  resultText1: {
    position: "relative",
    top: 3.5,
    marginLeft: 3,
  },

  tableScrollView: {
    flex: 1,
    width: "100%", // Set the width to 100% to occupy the entire container
  },
  tableContainer: {
    flexGrow: 1,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
    backgroundColor: "white",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 15,
    width:"100%"
  },
  tableCell: {
    flex: 1,
    fontSize: 15,
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    backgroundColor: "#f2f2f2",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    position:"relative",
    right:20
  },
  tableCellIndex: {
    width: "15%",
  },
  tableCellDataContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableCellData: {
    fontSize: 14,
  },
  reportButton: {
  
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#007BFF",
    position:"relative",
    right:10
  },
  reportButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
})

export default Phone;
