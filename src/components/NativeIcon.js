import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '../styles/icons';


export function NativeIcon({ iconName, iconColor, iconLib, iconSize }) {
    const size = iconSize || 20;
    const iconClr = iconColor || '#000000'
    return (
        <View>
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
        </View>
    )
}