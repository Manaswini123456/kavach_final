import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

import Menu from "../component/Menu";
const Home = (props) => {
  const description =
    "Cybercrime is any criminal activity that involves a computer, networked device or a network. While most cybercrimes are carried out in order to generate profit for the cybercriminals, some cybercrimes are carried out against computers or devices directly to damage or disable them.";
  return (
    <View style={styles.maincontainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.homeTop}>
          <Image
            style={styles.headerImage}
            source={require("../../assets/landingHead.png")}
          ></Image>
          <View style={styles.cyberHead}>
            <Text style={styles.cyberHeadText}>Examples Of </Text>
            <Text style={styles.cyberHeadText}>Basic Cyber</Text>
            <Text style={styles.cyberHeadText}>Crimes</Text>

            <View style={styles.cyberHeadDescView}>
              <Text style={styles.cyberHeadDesc}>
                1.Stolen credit card information
              </Text>

              <Text style={styles.cyberHeadDesc}>2.Phishing Campaigns</Text>
              <Text style={styles.cyberHeadDesc}>3.Theft of user accounts</Text>
              <Text style={styles.cyberHeadDesc}>4.Internet fraud</Text>
              <Text style={styles.cyberHeadDesc}>5.Internet fraud</Text>
              <Text style={styles.cyberHeadDesc}>
                6. ATM Fraud and many more....
              </Text>
            </View>
          </View>
        </View>

        <View style={{
          padding:20,
          marginTop:20
        }}>
          <Image
            source={require("../../assets/landingPageIllustration.png")}
            style={styles.image}
          />
        </View>

        <View style={{
         
          marginTop:30
        }}>
          <Image
            style={styles.landingPageCard}
            source={require("../../assets/landingPageCard.png")}
          ></Image>
        </View>
      </ScrollView>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 4,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    display: "flex",

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
    fontSize: 50,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  cyberHeadDesc: {
    fontSize: 20,
    color: "#7C7C7C",
    marginTop: 8,
    fontWeight: 400,
  },
  cyberHeadDescView: {
    marginTop: 15,
  },
  cyberHead: {
    marginTop: 30,
  },
  parastyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 0,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  image: {
    height: 500,
    width: "100%",
    borderRadius: 10,
  },
  landingPageCard:{
    width:"100%",
    height:380
  }
});

export default Home;
