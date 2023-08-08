import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, ImageBackground, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import Loader from "./Loader";


const Message_header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [headerinput, setheaderInput] = useState('');
  const [mess_header_input, setmess_header_input] = useState('');
  const [headerresult, setheaderResult] = useState(null);
  const [error_header, setErrorHeader] = useState('');
  const [spamUrls, setSpamUrls] = useState([]);

  useEffect(() => {
    fetchSpamHeaders();
  }, []);

  const fetchSpamHeaders = () => {
    axios.get('http://10.10.49.229:3000/api/get-spam-header')
      .then(response => {
        // console.log('Spam Headers:', response.data);
        const headerValues = response.data.map(item => item.data);
        setSpamUrls(headerValues);
      })
      .catch(error => {
        console.error('Error fetching spam Headers:', error);
      });
  };

  const headerhandle = () => {
    setIsLoading(true);

    setErrorHeader('');

    if (!headerinput || !mess_header_input) {
      setErrorHeader('Please enter a valid header and message.');
      return;
    }

    axios
      .get(
        `https://kavachallapi-production.up.railway.app/sms_header/${headerinput}`,
      { message: mess_header_input },
      )
      .then(response => {
        console.log('API Response:', response.data);
        setheaderResult(response.data);
        setIsLoading(false);

      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setheaderResult(null);
        setErrorHeader('Something went wrong. Please try again.');
        setIsLoading(false);

      });
  };

  const handleMarkSpamHeader = () => {
    setErrorHeader('');

    // Request for marking as spam
    const markSpamRequest_Header = axios.post('http://10.10.49.229:3000/api/mark-spam-header', { type: 'header', data: headerinput });
    const flagSpamRequest_Header = axios.put(`https://kavachallapi-production.up.railway.app/sms_header/flag_spam/${headerinput}`);

    axios.all([markSpamRequest_Header, flagSpamRequest_Header]).then(axios.spread((...responses) => {
      const markSpamResponse = responses[0];
      const flagSpamResponse = responses[1];
      console.log('Mark Spam Response:', markSpamResponse.data);
      console.log('Flag Spam Response:', flagSpamResponse.data);

      fetchSpamHeaders();
    })).catch(errors => {
      console.error('Error marking as spam:', errors);
      setErrorHeader('Something went wrong. Please try again.');
    });
  };

  // Function to render each item in the spamUrls array as a row in the table
  const renderTableItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{index + 1}</Text>
      <Text style={styles.tableCell}>{item}</Text>
      <Pressable style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Report</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}

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
      <View style={styles.buttonCont}>
        <Pressable style={styles.button} onPress={headerhandle}>
          <Text style={styles.buttonText}>Submit Header</Text>
        </Pressable>
        <Pressable style={styles.button2} onPress={handleMarkSpamHeader}>
          <Text style={styles.buttonText}>Mark as Spam</Text>
        </Pressable>
      </View>

      {error_header ? (
        <Text style={styles.errorText}>{error_header}</Text>
      ) : null}
      {headerresult !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Name: {headerresult.name !== undefined ? headerresult.name : 'N/A'}</Text>
          <Text style={styles.resultText}>Spam: {headerresult.is_spam !== undefined ? (headerresult.is_spam ? 'Yes' : 'No') : 'N/A'}</Text>
          <Text style={styles.resultText}>Number of spam: {headerresult.number_of_spam_marks !== undefined ? headerresult.number_of_spam_marks : 'N/A'}</Text>
        </View>
      )}

      {/* Table to show the spam headers */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableHeaderCell]}>Header</Text>
          <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
          <Text style={[styles.tableCell, styles.tableHeaderCell , {right:-10}]}>Report</Text>
        </View>
        <FlatList
          data={spamUrls}
          renderItem={renderTableItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

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
    position: "relative",
    right: 20,
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
    position: "relative",
    right: 10,
  },
  reportButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Message_header;