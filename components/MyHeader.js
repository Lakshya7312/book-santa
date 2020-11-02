import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const MyHeader = props => {
    return (
        <Header centerComponent={{text: props.title, style: {color: "#fff"}}} />
    );
}

export default MyHeader;