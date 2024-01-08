import React from 'react';
import { Image, Text, View } from 'react-native';
import logo from '../../../assets/batman-175.png';

import { styles } from './styles';

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>BAT PASS GENERATOR </Text>
            <Image source={logo} style={styles.image} />
        </>
    );
}