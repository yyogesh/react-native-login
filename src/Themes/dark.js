import { DarkTheme } from '@react-navigation/native';

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: 'black',
        primary: 'orange',
        shadowColor: 'white',
        text: 'white'
    }
}