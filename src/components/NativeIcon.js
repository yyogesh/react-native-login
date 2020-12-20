import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from '../styles/icons';


export function NativeIcon({ iconName, iconColor, iconLib, iconSize, onPress, iconStyle }) {
    const size = iconSize || 20;
    const iconClr = iconColor || '#000000'
    return (
        <TouchableOpacity onPress={() => onPress && onPress()} style={iconStyle}>
            {iconLib && iconLib === "MaterialIcons" && (
                <Icon.MaterialIcons
                    name={iconName}
                    color={iconClr}
                    size={size}
                />
            )}
            {iconLib && iconLib === "SimpleLineIcons" && (
                <Icon.SimpleLineIcons
                    name={iconName}
                    color={iconClr}
                    size={size}
                />
            )}
        </TouchableOpacity>
    )
}