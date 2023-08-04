import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
} from "react-native";

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchDataFromMongoDB();
  }, []);

  const fetchDataFromMongoDB = async () => {
    try {
      const response = await fetch("http://192.168.1.4:3000/api/get-spam-data");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data from MongoDB:", error);
    }
  };

  const handleReport = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>S.No.</Text>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Spam</Text>
      </View>
    );
  };

  const courseCard = ({ item, index }) => {
    // Use 'item.id' as the key if available, otherwise fallback to 'index'
    const key = item.id ? item.id.toString() : index.toString();

    return (
      <View style={styles.container1} key={key}>
        <Text style={styles.serialNumber}>{index + 1}</Text>
        <Text style={styles.urlName}>{item.data}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.spam}>{item.spam.toString()}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/women.jpg")}
        />
        <View style={styles.details}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.contact}>Phone: 1234567890</Text>
          <Text style={styles.contact}>Email: john.doe@example.com</Text>
          <Text style={styles.contact}>Aadhar Card: XXXX XXXX XXXX</Text>
        </View>
      </View>

      {renderHeader()}
      <FlatList
        keyExtractor={(item, index) =>
          item.id ? item.id.toString() : index.toString()
        }
        data={userData}
        renderItem={courseCard}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  mainContainer: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#f2f2f2",
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: "#112244",
  },
  container1: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#f2f2f2",
  },
  serialNumber: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
  },
  urlName: {
    flex: 3,
    fontSize: 16,
    textAlign: "center",
    color: "#112244",
  },
  type: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "#112244",
  },
  spam: {
    flex: 1,
    fontSize: 16,
    textAlign: "center",
    color: "red",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  details: {
    justifyContent: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserData;
