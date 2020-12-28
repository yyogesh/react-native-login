import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProductScreen } from '../screens/ProductScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { NativeIcon } from '../components/NativeIcon';

const Tab = createBottomTabNavigator();

export default function NavigationTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Product') {
                        return (
                            <NativeIcon
                                iconLib={'MaterialCommunityIcons'}
                                iconName={'home'}
                                iconSize={size}
                                iconColor={color}
                            />
                        );
                    } else if (route.name === 'About') {
                        return (
                            <NativeIcon
                                iconLib={'MaterialCommunityIcons'}
                                iconName={'user-cog'}
                                iconSize={size}
                                iconColor={color}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={ProductScreen} />
            <Tab.Screen name="Settings" component={AboutScreen} />
        </Tab.Navigator>
    );
}
