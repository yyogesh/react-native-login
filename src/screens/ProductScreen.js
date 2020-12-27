import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from '@react-navigation/native';

export function ProductScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text>ProductScreen page</Text>
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