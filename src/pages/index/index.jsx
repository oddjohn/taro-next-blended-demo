import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

// import Picker from '../../components/picker/index'
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
export default class Index extends Component {
  render() {
    return (
      <View className='red'>
        <card props={{ name: '456' }} />
        <foo props={{ name: '123' }} />
        <View>Detail: </View>
        <Button onClick={() => Taro.navigateTo({ url: '/taro/pages/detail/index' })}>Go To Detail</Button>
        <View>Picker: </View>
        <c-picker
          props={{
            list: ['A', 'B', 'C'],
            foo: { bar: '123' },
            fn: () => {
              console.log('fn')
            }
          }}
        />
        <View className="index">
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
        </View>
      </View>
      
    )
  }
}
