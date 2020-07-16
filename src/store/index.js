import { action, observable } from 'mobx'

class ObservableStore {
  @observable helloText = 'Greetings! You are now using MoonSolution native app template!'

  @action.bound changeHelloText(text) {
    this.helloText = text
  }
}

const observableStore = new ObservableStore()
export default observableStore