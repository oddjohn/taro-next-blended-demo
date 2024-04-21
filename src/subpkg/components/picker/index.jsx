import React, {Component} from 'react'
import { View, Button, Text } from '@tarojs/components'
import Common from '../common'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../../../actions/counter'


import './index.scss'

@connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    },
  })
)
export default class Picker extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View className='red'>
        <View>Picker: {this.props.title}</View>
        {this.props.list.map(item => (
          <View>PickerItem: {item}</View>
        ))}
        123
        <Button onClick={() => props.onButtonClick()}>Click me</Button>
        <Common />
        {/* <View className="index">
            <Button className="add_btn" onClick={this.props.add}>
              +
            </Button>
            <Button className="dec_btn" onClick={this.props.dec}>
              -
            </Button>
            <Button className="dec_btn" onClick={this.props.asyncAdd}>
              async
            </Button>
            <View>
              <Text>{this.props.counter.num}</Text>
            </View>
          </View> */}
      </View>
    )
  }
}
