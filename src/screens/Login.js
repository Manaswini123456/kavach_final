import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  KeyboardAvoidingView,
  ScrollView, // Add ScrollView import
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import logo from "../../assets/png/logo-black.png";
import logo1 from "../../assets/cyberDoodle.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // console.log(response);
      alert("Check your emails or password");
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(response);
      alert("Check your emails");
    } catch (error) {
      console.log(error);
      alert("Sign Up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image
          source={require("../../assets/png/logo-black.png")}
          style={styles.logo}
        />
        <Text style={styles.cyberHeadText}>Welcome To Citizen Safety App</Text>
        <Text style={styles.cyberHeadDesc}>Fight against cyber crime</Text>
        {/* <Image
          source={require("../../assets/cyberDoodle.png")}
          style={styles.logo2}
        /> */}

        <TextInput
          value={email}
          style={styles.input}
          placeholder="john23@gmail.com"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="xxxxxxxx"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableHighlight style={styles.buttonStyle1} onPress={() => signIn()}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonStyle} onPress={() => signUp()}>
              <Text style={styles.buttonTextStyle}>Create Account</Text>
            </TouchableHighlight>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  logo: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 0,
  },
  logo2: {
    width: "100%",
    marginBottom: 10,
  },
  cyberHeadText: {
    fontSize: 16,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 20,
  },
  cyberHeadDesc: {
    fontSize: 18,
    color: "#7C7C7C",
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 20,
    textDecorationLine: "underline",
  },
  buttonStyle1: {
    backgroundColor: "black",
    width: "100%",
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "black",
    width: "100%",
    height: 40,
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default Login;
