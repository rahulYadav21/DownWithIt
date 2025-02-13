import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title='go on details page' onPress={()=>navigation.navigate('Details')}/>
    </View>
  )
}