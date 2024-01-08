import React, { useState } from 'react';
import { Text, Pressable, ToastAndroid, Platform, Alert } from 'react-native';
import { BatTextInput } from '../BatTextInput';

import * as Clipboard from 'expo-clipboard';
import generatePass from '../../services/passwordService';
import { styles } from './styles';

export function BatButton() {

    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        let gerenratePass = generatePass();
        setPass(gerenratePass);
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
        Platform.OS === 'android' ? ToastAndroid.show('Copiado: ' + pass, ToastAndroid.SHORT) : null;
    }

    function handleCleanButton() {
        setPass('');
    }


    return (
        <>
            <BatTextInput pass={pass} />

            <Pressable style={styles.button} onPress={handleCleanButton} >
                <Text style={styles.text}>CLEAN</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleGenerateButton} >
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            {
                pass != '' && (
                    <Pressable style={styles.button} onPress={handleCopyButton}>
                        <Text style={styles.text}>⚡ COPY</Text>
                    </Pressable>
                )
            }

        </>
    );
}