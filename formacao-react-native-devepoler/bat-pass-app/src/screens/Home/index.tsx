import React from "react";
import { View } from "react-native";
import { styles } from './styles';
import { BatLogo } from "../../components/BatLogo";
import { StatusBar } from "expo-status-bar";
import { BatButton } from "../../components/BatButton";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                <BatButton />
            </View>
            <StatusBar style="light" />
        </View>
    );
}