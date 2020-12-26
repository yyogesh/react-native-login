import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import { lightTheme } from './src/Themes/light';
import { AuthContext } from './src/contexts/AuthContext';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase/config';
import { HomeScreen } from './src/screens/HomeScreen';
firebase.initializeApp(firebaseConfig);

const RootStack = createStackNavigator();

export default function App() {
  const auth = React.useMemo(() => ({
    login: (email, password) => {
      // Firebase database authenication
      console.log('login', email, password)
      firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
        const uid = response.user.uid;
        const userRef = firebase.firestore().collection('users');
        userRef.doc(uid).get().then(firestoreDocument => {
          if (!firestoreDocument.exists) {
            alert("User does not exist anymore.")
            return;
          }
          const user = firestoreDocument.data();
          navigator.navigator('Home', { user });
        }).catch(error => {
          alert(error)
        })
      }).catch(error => {
        alert(error)
      })
    },
    logout: () => { console.log('logout') },
    register: (email, password, name) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          name
        }
        const userRef = firebase.firestore().collection('users');
        userRef.doc(uid).set(data).then(firestoreDocument => {
          const user = firestoreDocument.data();
          navigator.navigator('Login', { user: data });
        }).catch(error => {
          alert(error)
        })
      }).catch(error => {
        alert(error)
      })
    }
  }));
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer theme={lightTheme}>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen name={"RootStack"} component={AuthStackNavigator} />
          <RootStack.Screen name={"Home"} component={HomeScreen} />
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
