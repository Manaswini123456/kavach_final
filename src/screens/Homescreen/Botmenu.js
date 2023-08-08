// src/FloatingMenu.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth"; // Import the necessary Firebase functions for authentication

import Contact from "../Contact";
const FloatingMenu = () => {
  const navigation = useNavigation();

  const handleNavigate = (screenName) => {
    navigation.navigate(screenName);
  };

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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("Chief Contacts&Links")}
      >
        <FontAwesome name="link" style={styles.icon} />
        <Text style={styles.label}>Links</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => handleNavigate("News")}
      >
        <FontAwesome name="newspaper-o" style={styles.icon} />
        <Text style={styles.label}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.centerMenuItem , {left:10}]} onPress={() => handleNavigate("Citizen")}>
        <FontAwesome name="users" style={styles.centerIcon} />
        <Text style={styles.label}>Citizen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.menuItem, {left:15}]}
        onPress={() => handleNavigate("Chatbot")}
      >
        <FontAwesome name="comments"  style={styles.icon} />
        <Text style={styles.label}>Chatbot</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={handleLogout}
      >
        <FontAwesome name="sign-out" style={styles.icon} />
        <Text style={styles.label}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    left: 5,
    right: 0,
    zIndex:99999999,
    backgroundColor:"#112244",
    paddingLeft:10,
    height:80,
    borderRadius:50,
    width:"98%"
  
  },
  menuItem: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  centerMenuItem: {
    alignItems: "center",
    backgroundColor: "crimson",
    borderRadius: 50,
    padding: 15,
    
  },
  icon: {
    fontSize: 24,
    marginBottom: 5,
    color: "white",
  },
  centerIcon: {
    fontSize: 24,
    color: "white",
  },
  label: {
    fontSize: 12,
    color: "white",
  },
});

export default FloatingMenu;
