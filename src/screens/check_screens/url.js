import { View, Text, TextInput } from 'react-native'
import React from 'react'

const url = () => {
  return (
    <View>
        <Text>URL VALIDITY CHECK</Text>
        <TextInput placeholder="Enter your URL" />
    </View>
  )
}

export default url