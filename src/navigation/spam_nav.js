import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import bitcoin from '../screens/check_screens/bitcoin'
import email from '../screens/check_screens/email'
import phone_num from '../screens/check_screens/phone_num'
import sms from '../screens/check_screens/sms'
import upi from '../screens/check_screens/upi'
import url from '../screens/check_screens/url'

function SpamStack() {
    const Stack = createNativeStackNavigator();
    <NavigationContainer>
        <Stack.Screen name="bitcoin" component={bitcoin}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'Bitcoin Wallet Address Check',
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="email" component={email}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'Email ID Check',
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="phone_num" component={phone_num}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'Phone Number Check',
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="sms" component={sms}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'SMS Header & Templates Check',
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="upi" component={upi}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'UPI Address Check',
        headerTitleAlign:'center'
      }}/>
      <Stack.Screen name="url" component={url}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitle:'URL',
        headerTitleAlign:'center'
      }}/>

    </NavigationContainer>
}

export default SpamStack