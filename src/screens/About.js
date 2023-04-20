import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <ScrollView>
      <Text style={styles.mainHeader}>KAVACH 2023</Text>
      <Text style={styles.parastyles}>TEAM BUG-BYTE</Text>

      <View>
        <Image
        style={styles.imgStyle}
        source={require('../../assets/kavach_logo.jpg')}/>
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About Kavach 2023</Text>
        <Text style={styles.parastyle}>
        Working toward empowering these imperative notions of our society, MoE's Innovation Cell,AICTE along with Bureau of Police Research and Development (BPR&D)(MHA) and Indian Cybercrime Coordination Centre (I4C)(MHA) have launched ‘KAVACH-2023’ a unique national Hackathon to identify innovative concepts and technology solutions for addressing the security challenges of the 21st century faced by our intelligence agencies.KAVACH-2023 is conceived to challenge India’s innovative minds to conceptualize ideas and framework in the domain of cyber security using artificial intelligence, deep learning, machine learning, automation, big data and cloud computing.
        </Text>
        <Text style={styles.aboutSubHeader}>About Bug-Byte</Text>
        <Text style={styles.parastyle}>
          TEAM BUG_BYTE consists of 6 members, keen in approaching the PS ID KVH-011, with zeal and enthusiasm, by the application of latest technology like: Blockchain, ML. The app provides the users with the facility to actually, get indicated and protected against the cyber crimes happening.
        </Text>

      </View>
      <Text style={[styles.mainHeader,
      {fontSize:20,paddingLeft:30,paddingRight:10,
      marginTop:0}]}>Follow on Social Media</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>Linking.openURL("https://www.youtube.com/watch?v=ysCiPuz6O-U&list=PLmP9QrmTNPqBANLiyVdb7-foPVvG3ONOm")}>
          <Image
          style={styles.iconStyle}
          source={require('../../assets/youtube.png')}/>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>Linking.openURL("https://kavach.mic.gov.in/")}>
          <Image
          style={styles.iconStyle}
          source={require('../../assets/kavach_logo_2.jpg')}/>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",
    
  },
  imgStyle:{
    width:"100%",
    height:200,
    borderRadius:20,
    borderWidth:2,
    borderColor:"black"
  },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:500,
    marginTop:50,
    marginBottom:10,
    lineHeight:30,
    paddingLeft:70
  },
  parastyle:{
    fontSize:14,
    color:"white",
    paddingBottom:30,
    
  },
  parastyles:{
    fontSize:18,
    color:"grey",
    paddingBottom:30,
    paddingLeft:105,
    textDecorationLine:"underline",
    color:"orange"

  },
  aboutLayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:20,
    marginVertical:30,
    
    
  },
  aboutSubHeader:{
    
    fontSize:20,
    color:"black",
    textTransform:"uppercase",
    fontWeight:600,
    marginVertical:15,
    alignSelf:"center"
  },
  menuContainer:{
    
    display:"flex",
    justifyContent:"space-evenly",
    flexDirection:"row"
  },
  iconStyle:{
    width:'100%',
    height:80,
    aspectRatio:1,
    borderRadius:20

  }

})
export default About