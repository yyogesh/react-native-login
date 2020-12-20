import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useTheme } from '@react-navigation/native';

export function FillButton({ title, style, onPress, ...props }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style, { backgroundColor: colors.primary }]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
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