import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Menu from "../component/Menu";

const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const description =
    "Cybercrime is any criminal activity that involves a computer, networked device or a network. While most cybercrimes are carried out in order to generate profit for the cybercriminals, some cybercrimes are carried out against computers or devices directly to damage or disable them.";

  return (
    <View style={styles.maincontainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/landingHead.png")}
          />
          <View style={styles.cyberHead}>
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
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/landingPageIllustration.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.landingPageCardContainer}>
          <Image
            style={styles.landingPageCard}
            source={require("../../assets/landingPageCard.png")}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.menuButton} onPress={handleOpenMenu}>
        <Text style={styles.menuButtonText}>☰ Open Menu</Text>
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.sideMenu}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseMenu}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          {/* Menu Items */}
          {/* Replace the following View with your actual menu items */}
          <View style={styles.menuItems}>
            <Text>MENU</Text>
            <Menu/>
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
  },
  headerImage: {
    height: 600,
    width: "100%",
    display: "flex",
    marginTop: 50,
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
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    
  },
  menuButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: "#fff",
    zIndex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 8,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menuItems: {
    marginTop: 20,
    
  },
});

export default Home;
