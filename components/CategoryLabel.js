import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string
}

const CategoryLabel = (props) => {
    const { container, label } = styles;
    const { title } = props;
    return (
        <View style={container}>
            <Text style={label}>{title}</Text>
        </View>
    )
}

const styles = {
    container: {
        width: Dimensions.get('window').width,
        height: 35,
        backgroundColor: 'rgb(216, 216, 216)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: 'rgb(0, 0, 0)',
        fontSize: 18,
    }
}

CategoryLabel.propTypes = propTypes;
export { CategoryLabel }