import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native'


import Menu from "../component/Menu";
import { getAuth, signOut } from "firebase/auth"; // Import the necessary Firebase functions for authentication
import Phonemenu from "./Homescreen/Phonemenu";
import BasicCyberCrimes from "./Homescreen/Information";
import FloatingAIButton from "./Homescreen/ChatbotIcon";
import Chatbot from "./Chatbot";
import HowToPreventCybercrime from "./Homescreen/Information2";
import FloatingMenu from "./Homescreen/Botmenu";
const Home = (props) => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const description =
    "Cybercrime is any criminal activity that involves a computer, networked device or a network. While most cybercrimes are carried out in order to generate profit for the cybercriminals, some cybercrimes are carried out against computers or devices directly to damage or disable them.";

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        // You can navigate to the login screen or any other screen after logout.
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const navigateToAnotherPage = () => {
    // Replace 'AnotherPage' with the actual name of the destination page in your navigation stack
    navigation.navigate(Chatbot);
  };


  return (
    <View style={styles.maincontainer}>
      {/* <FloatingAIButton onPress={navigateToAnotherPage}></FloatingAIButton> */}
<FloatingMenu></FloatingMenu>
      
      <ScrollView style={styles.scroll}>
      {/* <TouchableOpacity style={styles.menuButton} onPress={handleOpenMenu}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity> */}
      
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/landingHead.png")}
          />

          <Phonemenu></Phonemenu>
          <BasicCyberCrimes></BasicCyberCrimes>
         
          {/* <View style={styles.cyberHead}>
            <Text style={styles.cyberHeadText}>Basic Cyber Crimes</Text>

            <View style={styles.cyberHeadDescView}>
              <Text style={styles.cyberHeadDesc}>
                1. PHISHING: Deceptive emails steal information.
              </Text>
              <Text style={styles.cyberHeadDesc}>
                2. IDENTIFY THEFT: Fraudulently using personal data.
              </Text>
              <Text style={styles.cyberHeadDesc}>
                3. RANSOMWARE: Encrypts data, demands ransom.
              </Text>
              <Text style={styles.cyberHeadDesc}>
                4. CYBERBULLYING: Online harassment and intimidation.
              </Text>
              <Text style={styles.cyberHeadDesc}>
                5. DDOS ATTACK: Overloads and disrupts websites.
              </Text>
              <Text style={styles.cyberHeadDesc}>
                6. MALWARE: Infects devices, steals data and many more...
              </Text>
            </View>
          </View> */}
        </View>
        {/* <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/landingPageIllustration.png")}
            style={styles.image}
          />
        </View> */}
        <HowToPreventCybercrime></HowToPreventCybercrime>
        {/* <View style={styles.landingPageCardContainer}>
          <Image
            style={styles.landingPageCard}
            source={require("../../assets/landingPageCard.png")}
          />
        </View> */}
      </ScrollView>
      
      {isMenuOpen && (
        <View style={styles.sideMenu}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseMenu}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          {/* Menu Items */}
          {/* Replace the following View with your actual menu items */}
          <View style={styles.menuItems}>
           
            <Menu />
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    marginHorizontal: 0,
  },
  homeTop: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    top:45
  },
  headerImage: {
    height: 600,
    width: "100%",
    display: "flex",
    marginTop: -5,
  },
  cyberHeadText: {
    fontSize: 25,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "600",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  cyberHeadDesc: {
    fontSize: 15,
    color: "#7C7C7C",
    marginTop: 5,
    color: "black",
    marginHorizontal: 10,
  },
  cyberHeadDescView: {
    marginTop: 15,
  },
  cyberHead: {
    marginTop: 30,
  },
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  imageContainer: {
    padding: 20,
    marginTop: 20,
  },
  image: {
    height: 500,
    width: "100%",
    borderRadius: 10,
  },
  landingPageCardContainer: {
    marginTop: 30,
  },
  landingPageCard: {
    width: "100%",
    height: 380,
  },
  menuButton: {
    position: "relative",
    top:40,
    left: 0,
    backgroundColor: "#112244",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 0,
    zIndex:9999,
    width:"100%"
  },
  menuButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:45,
    position:"relative",
  
  
  },
  AiButton: {
    position: "absolute",
    bottom:40,
    left: 0,
    backgroundColor: "#112244",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 0,
    zIndex:99999,
    width:"100%"
  },
  menuButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:45,
    position:"relative",
  
  
  },
  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#fff",
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    zIndex:999999

    
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 8,
  },
  closeButtonText: {
    fontSize: 40,
    fontWeight: "bold",
    position:"relative",
    top:25,
    right:200
,
  },
  menuItems: {
    marginTop: 20,
    
  },
  header:{
    backgroundColor:"#007BFF",
    height:0,
    position:"relative",
    top:40,
    zIndex:999999
  },
  logoutButton:{
    backgroundColor: "crimson",
    width: "70%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,

    marginTop:0,
    color:"white",
    alignItems:"center"
  },
  logoutButtonText:{
    color:"white",
    fontSize:20

  }
});

export default Home;
