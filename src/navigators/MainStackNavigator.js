import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen } from '../screens/ProductScreen';
import NavigationTabs from './NavigationTabs';

const MainStack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <MainStack.Navigator >
            {/* <MainStack.Screen name={"Product"} component={ProductScreen}></MainStack.Screen> */}
            <MainStack.Screen name={"NavigationTabs"} component={NavigationTabs} options={{
                title: 'Product List'
            }}></MainStack.Screen>
        </MainStack.Navigator>
    );
}