import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'

export default class Item extends Component {
    render() {
        return (
            <View className='red'>
                item
                <card props={{ name: 'card' }} />
            </View>
        )
    }
}
