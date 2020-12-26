import React from 'react';
import { StyleSheet, View } from "react-native";
import { useTheme } from '@react-navigation/native';

export function HomeScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text>Home page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 100,
    },
})