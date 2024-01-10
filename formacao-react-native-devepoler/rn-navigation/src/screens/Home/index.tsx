import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';

export function Home({ navigation }: any) {

    function handleNavGallery() {
        navigation.navigate('gallery');
    }

    return (
        <View style={styles.container}>
            <Text>Home Work!</Text>
            <Button
                title='Gallery'
                onPress={handleNavGallery}
            />
        </View>
    );
}