import React from 'react'
import Main from './src/Main'
import { Provider } from 'mobx-react'
import observableStore from './src/store'
import 'mobx-react-lite/batchingForReactNative'

export default function App() {
  return (
    <Provider store={observableStore}>
      <Main/>
    </Provider>
  )
}


