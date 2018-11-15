import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../containers/Home';
import DetailScreen from '../containers/Detail';
import Notification from '../containers/Notification';
import Authors from '../containers/Authors';
import Day from '../containers/Day';

export default HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)'}
        })
    },
    Inner: {
        screen: Notification,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    },
    Authors: {
        screen: Authors,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    },
    Day: {
        screen: Day,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: { backgroundColor: 'rgb(202, 251, 247)' },
            headerTintColor: 'rgb(0, 0, 0)'
        })
    }
})
