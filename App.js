import * as React from 'react'
import AppNavigator from './src/router/AppNavigator'
import 'react-native-gesture-handler'
import { Provider } from 'mobx-react'
import { stores } from './src/store/index'
import 'mobx-react-lite/batchingForReactNative'

export default function App() {
  return (
    <Provider {...stores}>
      <AppNavigator />
    </Provider>
  )
}
