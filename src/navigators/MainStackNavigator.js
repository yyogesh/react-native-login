import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen } from '../screens/ProductScreen';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name={"Product"} component={ProductScreen}></MainStack.Screen>
        </MainStack.Navigator>
    );
}