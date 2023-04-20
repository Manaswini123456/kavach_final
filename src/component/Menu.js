import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Settings")}>
        <Text style={styles.textstyle}>Settings</Text>
        <Image
        style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/512/900/900834.png"}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("News")}>
        <Text style={styles.textstyle}>News</Text>
        <Image
        style={styles.iconstyle} source={{uri:"https://cdn-icons-png.flaticon.com/512/330/330703.png"}}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Citizen")}>
        <Text style={styles.textstyle}>Citizen</Text>
        <Image
        style={styles.iconstyle} source={{uri:"https://cdn.w600.comps.canstockphoto.com/citizen-icon-vector-with-male-person-eps-vectors_csp72941534.jpg"}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("Chief Contacts&Links")}>
        <Text style={styles.textstyle}>Imp_Links</Text>
        <Image
        style={styles.iconstyle} source={{uri:"https://www.shutterstock.com/image-illustration/useful-links-keyboard-button-business-260nw-583460233.jpg"}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}
      
      onPress={() =>navigation.navigate("About")}>
        <Text style={styles.textstyle}>About</Text>
        <Image
        style={styles.iconstyle} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3TqlyRzsuc-b0X2uOKsafkCExFUmlLbs0w&usqp=CAU"}}/>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    menuContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"

    },
    buttonStyle:{

    },
    textstyle:{
        textTransform:"capitalize",
        fontSize:14,
        fontWeight:500
    },
    iconstyle:{
        width:"100%",
        height:50,
        aspectRatio:1
    }
})

export default Menu