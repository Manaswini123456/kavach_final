import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Chatbot from '../Chatbot';
const FloatingAIButton = () => {
  const navigation = useNavigation();
  const navigateToAnotherPage = () => {
    // Replace 'AnotherPage' with the actual name of the destination page in your navigation stack
    navigation.navigate('Chatbot');
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={navigateToAnotherPage}>
      <View style={styles.iconContainer}>
      <FontAwesome5 name="robot" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    backgroundColor: '#FF5733',
    borderRadius: 50,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 6,
    zIndex:9999999
  },
  iconContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default FloatingAIButton;
