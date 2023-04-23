import React from 'react';
import { Text, Pressable,Image, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/native-stack';

import {LinearGradient} from 'expo-linear-gradient';
import SignUpScreen from './SignUp';
import SignInScreen from './SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeScreen({ navigation }) {
  return (
    <View className="w-full h-full">
  <LinearGradient colors={['#141e30', '#243b55']} style={{flex:1, borderRadius: 20}}>
      <View className="mx-4 h-full flex justify-center align-center space-y-6">
      <View>
      <Image source={require('../../assets/phone.jpg')} style={{width: 250, height: 250, alignSelf: 'center'}}/>
      </View>
      <Text className="text-blue text-2xl font-bold text-center mx-6" >KAVACH 2023</Text>
      <Text className="text-white text-base text-center mx-4" >CITIZEN SAFETY APP</Text>
      <View >
        <Pressable className="bg-blue  rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('SignInScreen')}>Sign In</Text></Pressable>
        <Pressable className="bg-blue rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-white font-bold text-base" onPress={() => navigation.navigate('SignUpScreen')}>Sign Up</Text></Pressable>
      </View>
    </View>
    </LinearGradient>
    </View>
  );
}


export default WelcomeScreen;