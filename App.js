import React from 'react'
import Main from './src/Main'
import { Provider } from 'mobx-react'
import { stores } from './src/store/index'
import 'mobx-react-lite/batchingForReactNative'

export default function App() {
  return (
    <Provider {...stores}>
      <Main/>
    </Provider>
  )
}
