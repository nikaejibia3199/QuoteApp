import React from 'react';
import { Image,  TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    onPress: PropTypes.func
}

const SideMenuIcon = (props) => {
    const { onPress } = props;
    const { container, icon } = styles;
    return (
        <TouchableOpacity 
            style={container}
            onPress={onPress}>
            <Image 
                source={require('../resources/images/menu.png')}
                style={icon}/>
        </TouchableOpacity>
    )
}

const styles = {
    container: {
        width: 20,
        height: 20,
        marginLeft: 10
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
}

SideMenuIcon.propTypes = propTypes;
export { SideMenuIcon };