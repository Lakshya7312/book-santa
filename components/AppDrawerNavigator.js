import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideDrawer from './SideDrawer';
import { AppTabNavigator } from './AppTabNavigator';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
    },
},
    { contentComponent: SideDrawer },
    {
        initialRouteName: "Home"
    }
)