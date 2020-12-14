import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export function Error({ error, ...props }) {
    return (
        <View style={styles.container}>
            <Text {...props} style={styles.text}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8
    },
    text: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'red'
    }
})