import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { inject, observer } from 'mobx-react'

const Main = ({ store }) => {
  return (
    <View style={styles.container}>
      <Text
        style="auto"
        onLongPress={() => store.changeHelloText('Write your own code!!!')}
      >
        {store.helloText}
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

export default inject('store')(observer(Main))
