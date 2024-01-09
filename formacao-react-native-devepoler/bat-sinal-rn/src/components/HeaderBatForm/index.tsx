import React from 'react';
import { Image, View } from 'react-native';
import logo from '../../../assets/logo_bat_sinal.png';

import { styles } from './styles';

export function HeaderBatForm() {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
        </View>
    );
}