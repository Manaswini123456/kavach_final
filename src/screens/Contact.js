import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          style={styles.headerImage}
          source={require("../../assets/linkPageHeader.png")}
        ></Image>
        <View style={styles.cyberHead}>
          <Text style={styles.cyberHeadText}>Registration Of Cyber</Text>

          <Text style={styles.cyberHeadText}>Crimes</Text>
        </View>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfv_Gmkbn-AhWZT2wGHU6CBaUQFnoECBMQAQ&url=https%3A%2F%2Fcybercrime.gov.in%2F&usg=AOvVaw3KgDKVg8JwvVMbombUjuw5&cshid=1682016919131060"
            )
          }
        >
          <Text style={styles.buttonTextStyle}>website link</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfv_Gmkbn-AhWZT2wGHU6CBaUQFnoECBMQAQ&url=https%3A%2F%2Fcybercrime.gov.in%2F&usg=AOvVaw3KgDKVg8JwvVMbombUjuw5&cshid=1682016919131060"
            )
          }
        >
          <Text style={styles.buttonTextStyle}>youtube link</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.buttonStyleEnd}
          onPress={() =>
            Linking.openURL(
              "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfv_Gmkbn-AhWZT2wGHU6CBaUQFnoECBMQAQ&url=https%3A%2F%2Fcybercrime.gov.in%2F&usg=AOvVaw3KgDKVg8JwvVMbombUjuw5&cshid=1682016919131060"
            )
          }
        >
          <Text style={styles.buttonTextStyle}>Find The Nearest Police Station</Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    
  },
  mainHeader: {
    paddingHorizontal: 25,
    fontSize: 20,
    margin: 0,
    textTransform: "uppercase",
    textDecorationLine: "underline",
    alignItems: "center",
    fontWeight: 600,
    marginTop: 10,
  },
  subContainer: {
    display: "flex",
    padding: 15,
  },
  register: {
    padding: 15,
    fontSize: 17,
    fontWeight: 600,
    textDecorationLine: "underline",
    display: "flex",
    marginTop: 0,
    paddingTop: 0,
  },
  Image: {
    height: 400,
    width: "95%",
    aspectRatio: 1.1,
    display: "flex",
    alignItems: "stretch",
  },
  headerImage: {
    height: 600,
    width: "100%",

    display: "flex",

    marginTop: 0,
  },
  cyberHeadText: {
    fontSize: 32,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: 600,
    textAlign: "center",
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
  button1: {
    backgroundColor: "#112244",
  },
  buttonStyle: {
    backgroundColor: "#112244",
    width: "70%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf:"center",
    marginTop:20
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize:20,
    textTransform:"uppercase"
    
  },
  buttonStyleEnd: {
    backgroundColor: "#112244",
    width: "100%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    borderRadius: 0,
    alignSelf:"center",
    marginTop:20,
    marginBottom:10
    
  },
});

export default Contact;
