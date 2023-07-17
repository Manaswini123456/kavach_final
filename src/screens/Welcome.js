import React from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#141e30', '#243b55']} style={{ flex: 1, borderRadius: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 4 }}>
          <View>
            <Image source={require('../../assets/phone.jpg')} style={{ width: 250, height: 250, alignSelf: 'center' }} />
          </View>
          <Text style={{ color: 'blue', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginHorizontal: 6 }}>
            KAVACH 2023
          </Text>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', margin: 4 }}>
            CITIZEN SAFETY APP
          </Text>
          <View>
            <Pressable
              style={{ backgroundColor: 'blue', borderRadius: 30, paddingVertical: 8, paddingHorizontal: 16, margin: 8 }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
                GET STARTED
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default WelcomeScreen;
