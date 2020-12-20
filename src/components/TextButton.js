import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useTheme } from '@react-navigation/native';

export function TextButton({ title, style, onPress, ...props }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={[styles.text, { color: colors.primary }]}>{title}</Text>
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
        fontWeight: '500',
        fontSize: 14
    }
})