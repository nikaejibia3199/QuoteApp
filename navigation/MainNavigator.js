import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import NotificationStack from '../navigation/NotificationNavigator';
import HomeStack from '../navigation/HomeNavigator';
import SideMenu from '../components/SideMenu';
import DetailStack from '../navigation/DetailNavigator';

export default createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Inner: {
        screen: NotificationStack,
    },
    Detail: {
        screen: DetailStack,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 250,
})