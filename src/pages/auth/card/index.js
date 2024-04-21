import React from 'react'
import { View } from '@tarojs/components'
import Common from '../../../subpkg/components/common/index'

export default function (props) {
    console.log(props)
    return (
        <View className='red'>
            card
            <Common />
        </View>
    )
}
