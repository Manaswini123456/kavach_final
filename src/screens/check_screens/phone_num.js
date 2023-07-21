import { View, Text, TextInput } from 'react-native'
import React from 'react'

const phone_num = () => {
  return (
    <View>
      <Text>PHONE NUMBER CHECK</Text>
      <TextInput placeholder="Enter your phone number" />
    </View>
  )
}

export default phone_num