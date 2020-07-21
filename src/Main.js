import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'
import testAPI from './api/test'

const Main = ({ test }) => {
  return (
    <View style={styles.container}>
      <Text
        style="auto"
        onPress={() => testAPI.test()}
        // onLongPress={() => test.changeHelloText('Write your own code!!!')}
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
