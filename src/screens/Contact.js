import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  TouchableHighlight,
} from "react-native";

const Contact = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          style={styles.headerImage}
          source={require("../../assets/linkPageHeader.png")}
        />
        <View style={styles.cyberHead}>
          <Text style={styles.cyberHeadText}>Registration Of Cyber</Text>
          <Text style={styles.cyberHeadText}>Crimes</Text>
        </View>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() =>
            handleLinkPress(
              "https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfv_Gmkbn-AhWZT2wGHU6CBaUQFnoECBMQAQ&url=https%3A%2F%2Fcybercrime.gov.in%2F&usg=AOvVaw3KgDKVg8JwvVMbombUjuw5&cshid=1682016919131060"
            )
          }
        >
          <Text style={styles.buttonTextStyle}>Website Link</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() =>
            handleLinkPress("https://www.youtube.com/watch?v=3e4JdZyrJGg")
          }
        >
          <Text style={styles.buttonTextStyle}>YouTube Link</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonStyleEnd}
          onPress={() => handleLinkPress("https://www.google.co.in/maps")}
        >
          <Text style={styles.buttonTextStyle}>
            Find The Nearest Police Station
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
  },
  headerImage: {
    height: 600,
    width: "100%",
    display: "flex",
    marginTop: 0,
  },
  cyberHead: {
    marginTop: 30,
  },
  cyberHeadText: {
    fontSize: 32,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "600",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#112244",
    width: "70%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
  },
  buttonStyleEnd: {
    backgroundColor: "#112244",
    width: "100%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    borderRadius: 0,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default Contact;
