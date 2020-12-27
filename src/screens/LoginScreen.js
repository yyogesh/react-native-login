import React from 'react';
import { StyleSheet, View } from "react-native";
import { Error } from '../components/Error';
import { FillButton } from '../components/FillButton';
import { Heading } from '../components/Heading';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';

export function LoginScreen({ navigation }) {
    const { colors } = useTheme();
    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const appLogin = async () => {
        const data = await login(email, password);
        console.log(data);
        // if (data) {
        //     navigation.navigate('MainStack');
        // }
    }
    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>LOGIN</Heading>
            <Error error={"Error message"} />
            <Input placeholder={'Email'} style={styles.input} keyboardType={'email-address'} value={email} onChangeText={setEmail} />
            <Input placeholder={'Password'} style={styles.input} secureTextEntry
                value={password} onChangeText={setPassword} />
            <FillButton title={"Login"} style={styles.loginButton} onPress={appLogin} />
            <TextButton title={'Have you an account? Create on'} onPress={() => { navigation.navigate('Registration') }} />
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
    }

})