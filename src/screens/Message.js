import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable, FlatList, Modal,
  TouchableOpacity } from 'react-native';
import axios from 'axios';
import Loader from "./Loader";


const Message = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [messageResult, setMessageResult] = useState(null);
  const [inputmessage, setInputMessage] = useState('');
  const [error_for_mess, setErrorForMess] = useState('');
  const [spammessage, setSpamMessage] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    fetchSpamMessages();
  }, []);

  const fetchSpamMessages = () => {
    axios.get('http://10.10.49.229:3000/api/get-spam-message')
      .then(response => {
        // console.log('Spam Messages:', response.data);
        setSpamMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching spam Messages:', error);
      });
  };
  const handleButtonClick = () => {
    setModalVisible(true);
  }
  const messagehandle = () => {
    setIsLoading(true);

    setErrorForMess('');
    axios.post('https://kavach-api.onrender.com/message', { message: inputmessage })
      .then(response => {
        console.log('API Response:', response.data);
        setMessageResult(response.data);
        setIsLoading(false);
        
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setMessageResult(false);
        setErrorForMess('Something went wrong. Please try again.');
        setIsLoading(false);

      }); 
      // let data = (messageResult.links); 
      // console.log(data);
  };

  const handleMarkSpamMessage = () => {
    axios.post('http://10.10.49.229:3000/api/mark-spam-message', { type: 'message', data: inputmessage })
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
      <Text style={[styles.tableCell, styles.tableCellIndex , {right:55 , top :10}]}>{index + 1}</Text>
      <Text style={[styles.tableCellData  , {right:65 , top :10 , width:"30%"}]}>{item.data}</Text>

      <Pressable style={styles.reportButton}>
        <Text style={styles.reportButtonText}>Report</Text>
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>S.No.</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell]}>Message</Text>
      <Text style={[styles.tableCell, styles.tableHeaderCell , {right:-10}]}>Report</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading && <Loader />}

      <Text style={styles.title}>FOR MESSAGES</Text>
      <TextInput
        style={styles.input}
        value={inputmessage}
        onChangeText={text => setInputMessage(text)}
        placeholder="Enter message"
        placeholderTextColor="#666"
      />
      <View style={styles.buttonCont}>
        <Pressable style={styles.button} onPress={messagehandle}>
          <Text style={styles.buttonText}>Submit Message</Text>
        </Pressable>
        <Pressable style={styles.button2} onPress={() => {handleButtonClick()}}>
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
              <Text style={styles.buttonText} onPress={() => {handleMarkSpamMessage();
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
      {error_for_mess ? (
        <Text style={styles.errorText}>{error_for_mess}</Text>
      ) : null}
      {messageResult !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Spam: {messageResult.result !== undefined ? (messageResult.result ? 'Yes' : 'No') : 'N/A'}</Text> 
          <Text style={styles.resultText}>Links: {messageResult.result !== undefined ? (Object.keys(messageResult.links).length>0 ? 'Found' : 'Not Found') : 'N/A'}</Text>  
          {
            Object.keys(messageResult.links).map((item,idx)=>{ 
              const malwareValue = messageResult.links[item].result.malware; 
              const phishingValue = messageResult.links[item].result.phishing;
              const suspiciousValue = messageResult.links[item].result.suspicious;   
              
              console.log('Item:', item, 'Malware:', malwareValue);
              return (
               <View> 
                 <Text style={styles.resultText}>Name: {messageResult.links[item].name}</Text> 
                 <Text style={styles.resultText}>Malware: {malwareValue===true?"true":"false"}</Text> 
                 <Text style={styles.resultText}>Phishing: {phishingValue===true?"true":"false"}</Text> 
                 <Text style={styles.resultText}>Suspicious: {suspiciousValue===true?"true":"false"}</Text>  
                </View> 
                
              )
            })
          }
        </View>
      )}

      <FlatList
        data={spammessage}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        style={styles.tableContainer}
      />
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
    paddingVertical: 0,
    paddingHorizontal: 16,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#007BFF",
    position: "relative",
    right: 10,
    height:40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    top:10
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

export default Message;