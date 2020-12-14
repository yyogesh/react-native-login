import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export function TextButton({ title, style, onPress, ...props }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8
    },
    text: {
        color: 'purple',
        fontWeight: '500',
        fontSize: 14
    }
})