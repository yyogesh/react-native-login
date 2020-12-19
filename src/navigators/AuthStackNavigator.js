import React from 'react';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistrationScreen } from '../screens/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={"Login"} component={LoginScreen}></AuthStack.Screen>
            <AuthStack.Screen name={"Registration"} component={RegistrationScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
}