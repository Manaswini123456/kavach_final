import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";

import axios from "axios";
import Loader from "./Loader";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Report_url from "./report_url";


const Url = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  
  
  const [inputData, setInputData] = useState("");
  const [apiResult, setApiResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [spamUrls, setSpamUrls] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchSpamUrls();
  }, []);

  const fetchSpamUrls = () => {

    
    axios
      .get("http://10.10.49.229:3000/api/get-spam-url")
      .then((response) => {
        // console.log("Spam URLs:", response.data);
        setSpamUrls(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching spam URLs:", error);
        
      });
  };

  const handleAPICall = () => {
    setIsLoading(true);
    setErrorMessage("");
    axios
      .post("https://kavach-api.onrender.com/url", { url: inputData })
      .then((response) => {
        console.log("API Response:", response.data);
        setApiResult(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setApiResult(null);
        setErrorMessage("Something went wrong. Please try again.");
        setIsLoading(false);
      });
  };

  const handleMarkSpamURL = () => {
    axios
      .post("http://10.10.49.229:3000/api/mark-spam", {
        type: "url",
        data: inputData,
      })
      .then((response) => {
        console.log("Spam Marking Response:", response.data);
        fetchSpamUrls();
      })
      .catch((error) => {
        console.error("Error marking as spam:", error);
      });
  };

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  const report = ()=>{
    navigation.navigate('Report_url')
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableCell, styles.tableCellIndex ,{top:10}]}>{index + 1}</Text>
      <View style={styles.tableCellDataContainer}>
        <Text style={styles.tableCellData}>{item.data}</Text>
        <Pressable
          style={styles.reportButton}
          onPress={() => report()}
        >
          <Text style={styles.reportButtonText}>Report</Text>
        </Pressable>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>URL</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell , {right:-10}]}>Report</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      
      {isLoading && <Loader />}
   
      <Text style={styles.title}>Check Website Address :</Text>
      <TextInput
        style={styles.input}
        value={inputData}
        onChangeText={(text) => setInputData(text)}
        placeholder="Enter Website URL Here!"
        placeholderTextColor="#666"
      />

      <View style={styles.buttonCont}>
        <Pressable style={styles.button} onPress={handleAPICall}>
          <Text style={styles.buttonText}>Check URL</Text>
        </Pressable>

        <Pressable style={styles.button2} onPress= {handleButtonClick}>
          <Text style={styles.buttonText}>Mark as Spam</Text>
        </Pressable>
      </View>
      <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      // onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText} onPress={() => {handleMarkSpamURL();
              setModalVisible(false)
              }}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText} onPress={()=>{setModalVisible(false)}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>

      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
      {apiResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Malware:{" "}
            {apiResult.malware ? (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  
                  <Text style={styles.resultText1}>Malware Detected!</Text>
                </View>
              </>
            ) : (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  
                  <Text style={styles.resultText1}>No Malware Detected!</Text>
                </View>
              </>
            )}
          </Text>
          <Text style={styles.resultText}>
            Phishing: {apiResult.phishing ? (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                 
                  <Text style={styles.resultText1}>Possible Phishing Detected!</Text>
                </View>
              </>
            ) : (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  
                  <Text style={styles.resultText1}>No Phishing Detected!</Text>
                </View>
              </>
            )}
          </Text>
          <Text style={styles.resultText}>
            Suspicious: {apiResult.suspicious ? (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  
                  <Text style={styles.resultText1}>Unusual Behaviour Detected!</Text>
                </View>
              </>
            ) : (
              <>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  
                  <Text style={styles.resultText1}>Normal Behaviour!</Text>
                </View>
              </>
            )}
          </Text>
        </View>
      )}
      <ScrollView
        style={styles.tableScrollView}
        contentContainerStyle={styles.tableContainer}
      >
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Url