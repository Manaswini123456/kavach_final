import { StyleSheet, Text,Image, View, ScrollView, TouchableOpacity, Linking, Button} from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text style={styles.mainHeader}>Chief Links & Contacts</Text>
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
          <Text style={styles.register}>REGISTRATION OF CYBER CRIME </Text>
          <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>Linking.openURL("https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjfv_Gmkbn-AhWZT2wGHU6CBaUQFnoECBMQAQ&url=https%3A%2F%2Fcybercrime.gov.in%2F&usg=AOvVaw3KgDKVg8JwvVMbombUjuw5&cshid=1682016919131060")}>
          <Text style={{
            fontSize:20,
            fontFamily:"sans-serif",
            fontStyle:"italic",
            color:"purple",
            textDecorationLine:"underline",
            padding:10
          }}>Click Here to visit the website (picture below) </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() =>Linking.openURL("https://www.youtube.com/watch?v=rvBNGtt6wIY&pp=ygUtaG93IHRvIHJlZ2lzdGVyIGFuZCB3b3JrIG9uIGN5YmVyY3JpbWUuZ292Lmlu")}>
          <Text style={{
            fontSize:20,
            fontFamily:"sans-serif",
            fontStyle:"italic",
            color:"purple",
            textDecorationLine:"underline",
            padding:10
          }}>Click Here to visit the youtube link </Text>
        </TouchableOpacity>
          <Image
          style={styles.Image}
          resizeMode="center"
          source={require('../../assets/crime.jpg')}/>
        </View>
        
        <Button style={{
          width:70        }}
          title='Know the nearest police station'
          onPress={() => Linking.openURL('https://www.google.co.in/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi1qeaClLn-AhWgTGwGHclGA98QFnoECA4QAQ&url=https%3A%2F%2Fmaps.google.com%2F&usg=AOvVaw3z2z03MnvIwD2K6kwtdD9z')}></Button>

      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  mainContainer:{
    display:"flex",
  },
  mainHeader:{
    paddingHorizontal:25,
    fontSize:20,
    margin:0,
    textTransform:"uppercase",
    textDecorationLine:"underline",
    alignItems:"center",
    fontWeight:600,
    marginTop:10
  },
  subContainer:{
    display:"flex",
    padding:15,  
  },
  register:{
    padding:15,
    fontSize:17,
    fontWeight:600,
    textDecorationLine:"underline",
    display:"flex",
    marginTop:0,
    paddingTop:0

  },Image:{
    height:400,
        width:"95%",
        aspectRatio:1.1,
        display:"flex",
        alignItems:"stretch",
        
  }
 
})

export default Contact