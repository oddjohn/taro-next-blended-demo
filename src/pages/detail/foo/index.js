import React from 'react'
import { View } from '@tarojs/components'

export default function (props) {
    console.log('foo props', props)
    return (
        <View className='red'>
            foo
        </View>
    )
}
