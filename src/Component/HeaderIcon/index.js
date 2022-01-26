import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderIcon = (props) => {

    const {
        name,
        onPress
    } = props;


    return (
        <TouchableOpacity
            style={styles.threeline}
            onPress={onPress}
        >
            <Icon name={name} color={'#000'} size={20} />
        </TouchableOpacity>
    )
}

export default HeaderIcon;
