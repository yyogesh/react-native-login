import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import { lightTheme } from './src/Themes/light';
import { AuthContext } from './src/contexts/AuthContext';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase/config';
import { HomeScreen } from './src/screens/ProductScreen';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { useAuth } from './src/hooks/useAuth';
import { UserContext } from './src/contexts/UserContext';
import { SplashScreen } from './src/screens/SplashScreen';
import { ThemeContext } from './src/contexts/ThemeContext';
import { darkTheme } from './src/Themes/dark';
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator();

export default function App() {
  const { auth, state } = useAuth();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const switchTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  console.log(state);

  const renderScreens = () => {
    if (state.loading) {
      return <RootStack.Screen name={"Splash"} component={SplashScreen} />
    }
    return (state && state.user ? <RootStack.Screen name={"MainStack"} >
      {
        () => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )
      }
    </RootStack.Screen> :
      <RootStack.Screen name={"RootStack"} component={AuthStackNavigator} />)
  }
  return (
    <ThemeContext.Provider value={switchTheme}>
      <AuthContext.Provider value={auth}>
        <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {
              renderScreens()
            }
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
