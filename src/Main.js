import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'

const Main = ({ test, navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style="auto"
        onLongPress={() => navigation.navigate('About')}
      >
        {test.helloText}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default inject('test')(observer(Main))
