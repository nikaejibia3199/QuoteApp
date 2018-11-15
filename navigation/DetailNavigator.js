import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import DetailScreen from '../containers/Detail';

export default DetailStack = createStackNavigator({
    Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    }
})