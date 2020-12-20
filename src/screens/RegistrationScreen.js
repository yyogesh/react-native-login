import React from 'react';
import { StyleSheet, View } from "react-native";
import { Error } from '../components/Error';
import { FillButton } from '../components/FillButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { NativeIcon } from '../components/NativeIcon';
import { TextButton } from '../components/TextButton';
import { useTheme } from '@react-navigation/native';

export function RegistrationScreen({ navigation }) {
    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Registration</Heading>
            <NativeIcon iconLib={"MaterialIcons"} iconColor={colors.primary} iconName={"login"}
                onPress={() => { navigation.navigate('Login') }} iconStyle={styles.closeButton} />
            <Error error={"Error message"} />
            <Input placeholder={'Email'} style={styles.input} keyboardType={'email-address'} />
            <Input placeholder={'Password'} style={styles.input} secureTextEntry />
            <FillButton title={"Registration"} style={styles.loginButton} onPress={() => { }} />
            <TextButton title={'Have you an account? Create on'} onPress={() => { }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 100,
    },
    input: {
        marginVertical: 8
    },
    heading: {
        marginBottom: 30
    },
    loginButton: {
        marginVertical: 20
    },
    closeButton: {
        position: 'absolute',
        top: 60,
        right: 20
    }

})