import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from '../screens/News';

import Contact from '../screens/Contact';
import UserData from '../screens/UserData';
// import Course from '../screens/Course';
import Blockchain from '../screens/Blockchain';
import Chatbot from '../screens/Chatbot';
import Phone from '../screens/Phone';
import Message_header from '../screens/Message_header';
import Url from '../screens/Url';
import Upi from '../screens/Upi';
import Message from '../screens/Message';

function UserStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home"component={Home}></Stack.Screen> */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <Home {...props} channelName={"app by team Bug-Byte"} />}
        </Stack.Screen>

        {/* News Screen */}
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* UserData*/}
        <Stack.Screen
          name="Citizen"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* Contacts and Links */}
        <Stack.Screen
          name="Chief Contacts&Links"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* PHONE NUMBER */}

        <Stack.Screen
        name='Phone'
        component={Phone}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'Phone',
          headerTitleAlign: 'center',
        }}/>

        {/* SMS HEADER */}

        <Stack.Screen
        name='Message_header'
        component={Message_header}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'SMS Header',
          headerTitleAlign: 'center',
        }}/>

        {/* URL CHECK */}

        <Stack.Screen
        name='Url'
        component={Url}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'URL',
          headerTitleAlign: 'center',
        }}/>

        {/* UPI CHECK */}

        <Stack.Screen
        name='Upi'
        component={Upi}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'UPI',
          headerTitleAlign: 'center',
        }}/>

        {/* BITCOIN WALLET ADDRESS CHECK */}
        
         <Stack.Screen
          name="Blockchain"
          component={Blockchain}
          options={{
            headerTitleStyle: {
              fontSize: 20,
            },
            headerTitle: 'Blockchain',
            headerTitleAlign: 'center',
          }}
        />

        {/* SMS TEMPLATE */}

        <Stack.Screen
        name='Message'
        component={Message}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'Message Template',
          headerTitleAlign: 'center',
        }}/>

        {/* CHATBOT */}

        <Stack.Screen
        name='Chatbot'
        component={Chatbot}
        options={{
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitle: 'Chatbot',
          headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default UserStack;
