import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'
import Menu from '../component/Menu';
const Home = (props) => {
    const description = "Cybercrime is any criminal activity that involves a computer, networked device or a network. While most cybercrimes are carried out in order to generate profit for the cybercriminals, some cybercrimes are carried out against computers or devices directly to damage or disable them.";
  return (
    <View style={styles.maincontainer}>
      <ScrollView style={styles.scroll}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage}
        resizeMode="center"
        source={require('../../assets/kavach.png')}></Image>
        <Text style={styles.mainHeader}>WELCOME TO </Text>
        <Text style={styles.mainHeader}>CITIZEN SAFETY APP </Text>
        <Text style={[styles.mainHeader,{
        fontSize:20,color:"purple",
        fontFamily: 'Roboto',
        textDecorationLine:"underline",
        fontWeight:500,
        marginTop:5,
        fontStyle:"italic"}]}>{props.channelName} </Text>
        <Text style={{
          fontFamily:'Roboto',
          fontSize:20,
          paddingTop:20,
          textDecorationLine:"underline",
        }}>What is Cyber Crime?</Text>
        <Text style={styles.parastyle}>{description}</Text>
        <Text style={{
          fontFamily:'Roboto',
          fontSize:20,
          paddingTop:0,
          textDecorationLine:"underline",
        }}>Examples of Basic Cyber Crimes</Text>
        <View style={{
          display:"flex",
        }}>
        <Text>1.Stolen credit card information</Text>
        <Text>2.Phishing Campaigns</Text>
        <Text>3.Theft of user accounts</Text>
        <Text>
          4.Internet fraud
        </Text>
        <Text>5.Internet fraud</Text>
        <Text>6. ATM Fraud and many more....</Text></View>
        <Image 
        source={require('../../assets/cyber_crime_1.webp')}
        style={styles.image}/>
      </View>
      <Text style={{
          fontFamily:'Roboto',
          fontSize:30,
          paddingTop:20,
          textDecorationLine:"underline",
        }}>How to avoid Cyber</Text>
        <Text 
        style={{
          fontFamily:'Roboto',
          fontSize:30,
          paddingLeft:100,
          textDecorationLine:"underline",
        }}>Crime?</Text>
        <View style={{
          display:"flex",
          
        }}>
          <Text>1.Use a full-service internet security suite</Text>
          <Text>2.Use strong passwords</Text>
          <Text>3.Keep your software updated</Text>
          <Text>4.Manage your social media settings</Text>
          <Text>5.Strengthen your home network</Text>
          <Text>6.Keep up to date on major security breaches</Text>
          <Text>7. Use safe and secured VPN when required</Text>
          <Text>8. Keep an eye on the content that a child is intaking via internet and many more...</Text>
        </View>

      </ScrollView>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
        style={[
          styles.lineStyle,{
            marginVertical:4
          },
        ]}></View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    maincontainer:{
        height:"100%",
        display:"flex",
        justifyContent:"space-between",
        paddingHorizontal:20,
        backgroundColor:"#fff",
        textAlign:"center",
      },
      scroll:{
        marginHorizontal:1
      },
      homeTop:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:10
    
      },
      headerImage:{
        height:undefined,
        width:"100%",
        aspectRatio:1,
        display:"flex",
        alignItems:"stretch",
        marginTop:50,
        borderRadius:20,
        
    
      },
      mainHeader:{
        fontSize:25,
        color:"#344055",
        textTransform:"uppercase",
        fontWeight:600
        
      },
      parastyle:{
        textAlign:"left",
        fontSize:19,
        color:"#7d7d7d",
        marginTop:30,
        paddingBottom:50,
        lineHeight:26,
    
      },
      lineStyle:{
        marginBottom:0,
        borderWidth:0.5,
        borderColor:"grey"
      },
      image:{
        display:"flex",
        width:"100%",
        borderRadius:10
      }
})

export default Home