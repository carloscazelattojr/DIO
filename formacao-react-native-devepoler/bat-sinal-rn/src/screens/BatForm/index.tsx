import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { HeaderBatForm } from '../../components/HeaderBatForm';

export function BatForm() {
    return (
        <>
            <HeaderBatForm />
            <View style={styles.container}>
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

                <TouchableOpacity style={styles.formButton}>
                    <Text style={styles.formButtonText}>Enviar</Text>
                </TouchableOpacity>


            </View>
        </>
    );
}