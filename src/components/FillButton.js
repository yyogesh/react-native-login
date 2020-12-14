import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export function FillButton({ title, style, onPress, ...props }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16
    }
})