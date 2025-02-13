import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Details({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details</Text>
            <Button title='go Back Home page' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}