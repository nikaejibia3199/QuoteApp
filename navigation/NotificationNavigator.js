import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import NotificationScreen from '../containers/Notification';
import DetailScreen from '../containers/Detail';

export default NotificationStack = createStackNavigator({
    Inner: {
        screen: NotificationScreen
    }
})