import { Link } from "@react-navigation/native";
import React, { useState } from "react";
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
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Ola electric scooter scam dupes thousands; 20 people arrested",
    description:
      "Delhi Police have arrested 20 people from across the country in connection with an elaborate Ola Electric scooter scam.The scammers created a fake website to dupe over 1,000 people looking to purchase the electric vehicles and defrauded them of crores.The funds were taken from them in the name of insurance, down payments, delivery charges, and more.",
    image_url: require("../../assets/ola.webp"),
    link: "https://www.newsbytesapp.com/news/auto/ola-electric-scooter-scam-busted/story",
  },
];

const CONTACT = [
  {
    id: "1",
    number: "7899851546",
    reports: "500",
  },
  {
    id: "2",
    number: "9993841546",
    reports: "500",
  },
  {
    id: "3",
    number: "6599851546",
    reports: "500",
  },
];

const UserData = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleReport = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const courseCard = ({ item }) => {
    return (

      <>
        <View style={styles.container2}>
          <Text style={styles.heading}>Potential Spam Contacts</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.sno, styles.tableHead]}>
                S.No
              </Text>
              <Text
                style={[styles.tableCell, styles.contact, styles.tableHead]}
              >
                Contact Number
              </Text>
              <Text style={[styles.tableCell, styles.report, styles.tableHead]}>
                Report
              </Text>
            </View>

            {CONTACT.map((item) => (
              <View style={styles.tableRow}>
                <Text
                  style={[styles.tableCell, styles.sno, styles.tableContent]}
                >
                  {item.id}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.contact,
                    styles.tableContent,
                    styles.contactContent,
                  ]}
                >
                  {item.number}
                </Text>
                <TouchableOpacity
                  style={[styles.reportButton, styles.tableContent]}
                  onPress={handleReport}
                >
                  <Text style={styles.reportButtonText}>Report</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Report Spam Contact</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.modalButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={styles.container2}>
          <Text style={styles.heading}>Potential Spam Messages</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.sno, styles.tableHead]}>
                S.No
              </Text>
              <Text
                style={[styles.tableCell, styles.contact, styles.tableHead]}
              >
                Contact Number
              </Text>
              <Text style={[styles.tableCell, styles.report, styles.tableHead]}>
                Report
              </Text>
            </View>

            {CONTACT.map((item) => (
              <View style={styles.tableRow}>
                <Text
                  style={[styles.tableCell, styles.sno, styles.tableContent]}
                >
                  {item.id}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.contact,
                    styles.tableContent,
                    styles.contactContent,
                  ]}
                >
                  {item.number}
                </Text>
                <TouchableOpacity
                  style={[styles.reportButton, styles.tableContent]}
                  onPress={handleReport}
                >
                  <Text style={styles.reportButtonText}>Report</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Report Spam Contact</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.modalButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <View style={styles.container2}>
          <Text style={styles.heading}>Potential Spam UPI Address</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.sno, styles.tableHead]}>
                S.No
              </Text>
              <Text
                style={[styles.tableCell, styles.contact, styles.tableHead]}
              >
                Contact Number
              </Text>
              <Text style={[styles.tableCell, styles.report, styles.tableHead]}>
                Report
              </Text>
            </View>

            {CONTACT.map((item) => (
              <View style={styles.tableRow}>
                <Text
                  style={[styles.tableCell, styles.sno, styles.tableContent]}
                >
                  {item.id}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    styles.contact,
                    styles.tableContent,
                    styles.contactContent,
                  ]}
                >
                  {item.number}
                </Text>
                <TouchableOpacity
                  style={[styles.reportButton, styles.tableContent]}
                  onPress={handleReport}
                >
                  <Text style={styles.reportButtonText}>Report</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Report Spam Contact</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleCloseModal}
              >
                <Text style={styles.modalButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </>
    );
  };
  return (
    <ScrollView>
    <SafeAreaView>
      <View style={styles.container1}>
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

      <FlatList
        keyExtractor={(item) => item.id}
        data={DATA}
        renderItem={courseCard}
      />
    </SafeAreaView></ScrollView>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 10,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainHeader: {
    fontSize: 15,
    color: "#344405",
    textTransform: "uppercase",
    fontWeight: 500,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    fontStyle: "italic",
    paddingBottom: 15,
    lineHeight: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "black",
    textTransform: "uppercase",
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
  contactContent: {
    fontSize: 16,
    marginBottom: 5,
    position:"relative",
    right:50

  },

  container2: {
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
  },
  tableHeader: {
    backgroundColor: "#000",
    flexDirection: "row",
    padding: 5,
    marginBottom:4
  },
  tableRow: {
    flexDirection: "row",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
  tableHead: {
    color: "white",
  },
  tableContent: {
    position: "relative",
    right: 20,
  },
  sno: {
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },
  contact: {
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },
  report: {},
  reportButton: {
    backgroundColor: "#000",
    padding: 5,
    borderRadius: 10,
  },
  reportButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default UserData;
