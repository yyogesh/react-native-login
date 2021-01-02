import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';


export function Card({ style, children, onPress }) {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={[styles.card, style, { backgroundColor: colors.background, shadowColor: colors.shadowColor }]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1
    }
})