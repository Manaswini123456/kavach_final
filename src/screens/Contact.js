import { StyleSheet, Text,Image, View, ScrollView, TouchableOpacity, Linking, Button} from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.mainHeader}>Chief Links & Contacts to </Text>
        <Text style={styles.mainHeaders}>tackle Cyber Crime</Text>
        <View style={styles.subContainer}>
          <Text style={{color:"blue"}}>1.The Government has launched the National Cyber Crime Reporting Portal 
             www.cybercrime.gov.in to enable public to report incidents pertaining to all types of cyber crimes, with a special focus on cyber crimes against women and children.</Text>
             <Text>2. Toll Free Number 1930 has been devised to get assistance in lodging online cyber complaints. </Text>
             <Text style={{color:"blue"}}>3. National Cybercrime Training Centre (NCTC) (www.cytrain.ncrb.gov.in )</Text>
             <Text>4.National police helpline number is 112.
               National women helpline number is 181 and Cyber Crime Helpline is 1930.</Text>
               <Text style={{color:"blue"}}></Text>
        </View>
        <View>
          <Text style={{
            fontSize:20,
            color:"purple",
            textTransform:"uppercase",
            fontWeight:700,
            textDecorationLine:"underline",
            lineHeight:30,
            
          }}> WHERE TO REGISTER CYBER </Text>
          <Text style={{
            fontSize:20,
            color:"purple",
            textTransform:"uppercase",
            fontWeight:700,
           paddingLeft:30,
            lineHeight:30,
            textDecorationLine:"underline"
            
          }}>CRIME ON THE WEBSITE?</Text>
          <Image
          style={{
            width:560,
            height:400
          }}
          source={require('../../assets/crime.jpg')}/>
        </View>
        <Button style={{
          width:70        }}
          title='Know the nearest police station'></Button>

      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
    alignItems:"center",
  },
  mainHeaders:{ fontSize:20,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:500,
    marginTop:0,
    marginBottom:10,
    marginHorizontal:10,
    textDecorationLine:"underline"
  },
  mainHeader:{
    fontSize:20,
    color:"#344055",
    textTransform:"uppercase",
    fontWeight:500,
    marginTop:30,
    marginBottom:10,
    marginHorizontal:10,
    paddingRight:30,
    lineHeight:25,
    
    // display:"flex",
    textDecorationLine:"underline"

  },
  subContainer:{
    display:"flex",
    fontSize:20,
    padding:10,
    flexDirection:"column",
    justifyContent:"space-between"

  }
})

export default Contact