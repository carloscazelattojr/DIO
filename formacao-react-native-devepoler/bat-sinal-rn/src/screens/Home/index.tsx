import React, { useState } from 'react';
import { Image, Platform, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

import logo from '../../../assets/logo_bat_sinal.png';
import { styles } from './styles';
import { BatForm } from '../BatForm';
import { HeaderBatForm } from '../../components/HeaderBatForm';

export function Home() {
    const [isActive, setIsActive] = useState(false);

    function handleActive() {
        setIsActive(!isActive);
        console.log(isActive);
    }


    function handleSendFormButton() {
        Platform.OS === 'android' ? ToastAndroid.show('Enviado', ToastAndroid.SHORT) : null;
        setIsActive(!isActive);
    }

    return (
        <>
            {
                !isActive ? (
                    <View style={styles.container}>
                        <Image source={logo} style={styles.logo} />
                        <TouchableOpacity style={styles.button} onPress={handleActive}>
                            <Text style={styles.text}>activate bat sinal</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <HeaderBatForm />
                        <View  >
                            <Text style={styles.formText}>Nome</Text>
                            <TextInput style={styles.formInput} />

                            <Text style={styles.formText}>Celular</Text>
                            <TextInput
                                style={styles.formInput}
                                keyboardType='number-pad'
                            />

                            <Text style={styles.formText}>Localização</Text>
                            <TextInput style={styles.formInput} />

                            <Text style={styles.formText}>Observação</Text>
                            <TextInput
                                style={[styles.formInput, styles.formInputMemo]}
                                multiline={true}
                                textAlignVertical="top"
                            />

                            <TouchableOpacity style={styles.formButton} onPress={handleSendFormButton}>
                                <Text style={styles.formButtonText} >Enviar</Text>
                            </TouchableOpacity>


                        </View>
                    </>)

            }
        </>
    );
}