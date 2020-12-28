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
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator();

export default function App() {
  const { auth, state } = useAuth();
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
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {
            renderScreens()
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
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
