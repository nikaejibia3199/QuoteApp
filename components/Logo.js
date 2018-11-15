import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

const Logo = (props) => {
    const { container } = styles;
    return (
        <View style={{ flex: 1, marginRight: 60, alignItems: 'center' }}>
            <TouchableOpacity onPress={props.onPress}>
                <Image
                    source={require('../resources/images/logo.png')}
                    style={container}
                    />
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        width: 100,
        height: 40,
        resizeMode:'cover'
    }
}
export { Logo };