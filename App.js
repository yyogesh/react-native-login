import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import { lightTheme } from './src/Themes/light';
import { AuthContext } from './src/contexts/AuthContext';

const RootStack = createStackNavigator();

export default function App() {
  const auth = React.useMemo(() => ({
    login: (email, password) => {
      // Firebase database authenication
      console.log('login', email, password)
    },
    logout: () => { console.log('logout') }
  }));
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={"RootStack"} component={AuthStackNavigator} />
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
