import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Settings")}>
        <Image
        style={[styles.iconstyle , {position:"relative" , left:10}]} source={require("../../assets/settingIcon.png")}/>
        <Text style={styles.textstyle}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("News")}>
        <Image
        style={styles.iconstyle} source={require("../../assets/newsIcon.png")}/>
        <Text style={styles.textstyle}>News</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Citizen")}>
        <Image
        style={[styles.iconstyle , {position:"relative" , left:5}]} source={require("../../assets/citizenIcon.png")}/>
        <Text style={styles.textstyle}>Citizen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Chief Contacts&Links")}>
        <Image
        style={[styles.iconstyle, {position:"relative" , left:12}]} source={require("../../assets/linkIcon.png")}/>
        <Text style={styles.textstyle}>Imp-Links</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("About")}>
        <Image
        style={styles.iconstyle} source={require("../../assets/aboutIcon.png")}/>
        <Text style={styles.textstyle}>Check</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    menuContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginBottom:15,
        paddingTop:10

    },
    buttonStyle:{

    },
    textstyle:{
        textTransform:"uppercase",
        fontSize:16,
        fontWeight:500,
        marginTop:10
    },
    iconstyle:{
        width:"100%",
        height:50,
        aspectRatio:1
    }
})

export default Menu