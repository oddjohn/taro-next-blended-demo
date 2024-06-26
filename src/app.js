import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
const store = configStore()

class App extends Component {

  componentDidMount () {
    console.log('app launch')
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
