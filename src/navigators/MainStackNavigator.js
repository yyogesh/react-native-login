import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen } from '../screens/ProductScreen';
import NavigationTabs from './NavigationTabs';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <MainStack.Screen name={"Product"} component={ProductScreen}></MainStack.Screen> */}
            <MainStack.Screen name={"NavigationTabs"} component={NavigationTabs}></MainStack.Screen>
        </MainStack.Navigator>
    );
}