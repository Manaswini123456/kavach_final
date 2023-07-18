import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
// import { TextInput } from 'react-native-gesture-handler';
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
    
    <View style={styles.container}>
   

      <Image
        source={require("../../assets/png/logo-black.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.cyberHeadText}>Welcome To Citizen Safety App</Text>
      <Text style={styles.cyberHeadDesc}>
        The One Stop Solution To Your CyberSecurity Problems
      </Text>
      <Image
        source={require("../../assets/cyberDoodle.png")}
        style={styles.logo2}
      ></Image>
        
        <TextInput
          value={email}
          style={styles.input}
          placeholder="john23@gmail.com"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="xxxxxxxx"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
    

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableHighlight  style={styles.buttonStyle1}title="Login" onPress={() => signIn()}>
              <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight  style={styles.buttonStyle}title="Login" onPress={() => signUp()}>
              <Text style={styles.buttonTextStyle}>Create Account</Text>
            </TouchableHighlight>
            
          </>
        )}
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
    top:-15
  },
  logo: {
    height: 200,
    width: 200,
    bottom: 20,
    left: 75,
  },
  logo2: {

    width: "100%",
    bottom: 10,
    left: 0,
  },
  cyberHeadText: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: 600,
    bottom: 20,
    left: 15,
  },
  cyberHeadDesc: {
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 8,
    fontWeight: 400,
    alignSelf: "center",
    bottom: 20,
  },

  buttonStyle1: {
    backgroundColor: "black",
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf: "center",
    
  },
  buttonStyle: {
    backgroundColor: "black",
    width: "100%",
    height: 40,
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  buttonTextStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    
  },
});

export default Login;
