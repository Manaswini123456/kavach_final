import { View, Text, TextInput } from 'react-native'
import React from 'react'

const upi = () => {
  return (
    <View>
      <Text>UPI ADDRESS VALIDITY CHECK</Text>
      <TextInput placeholder="Enter your UPI address" />
    </View>
  )
}

export default upi