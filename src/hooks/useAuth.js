import React from 'react';
import firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAction } from '../actions/createAction';
import { sleep } from '../actions/sleep';

const intialState = {
    user: undefined,
    loading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: { ...action.payload }
            }
        case 'REMOVE_USER':
            return {
                ...state,
                user: undefined
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export function useAuth() {
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const auth = React.useMemo(() => ({
        login: async (email, password) => {
            // Firebase database authenication
            console.log('login', email, password)
            // firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            //     const uid = response.user.uid;
            //     const userRef = firebase.firestore().collection('users');
            //     userRef.doc(uid).get().then(firestoreDocument => {
            //         if (!firestoreDocument.exists) {
            //             alert("User does not exist anymore.")
            //             return;
            //         }
            //         const user = firestoreDocument.data();
            //         await AsyncStorage.setItem(
            //             'user',
            //             user
            //         );
            //         dispatch(createAction('SET_USER', user));
            //         return user;
            //         //  navigator.navigator('Home', { user });
            //     }).catch(error => {
            //         alert(error)
            //     })
            // }).catch(error => {
            //     alert(error)
            // })
            await AsyncStorage.setItem(
                'user',
                {
                    email, password
                }
            );
            dispatch(createAction('SET_USER', {
                email, password
            }));
            return {
                email, password
            }
        },
        logout: async () => {
            await AsyncStorage.removeItem(
                'user'
            );
            dispatch(createAction('REMOVE_USER', user));
        },
        register: async (email, password, name) => {
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
                    return user;
                    //  navigator.navigator('Login', { user: data });
                }).catch(error => {
                    alert(error)
                })
            }).catch(error => {
                alert(error)
            })
        }
    }));

    React.useEffect(() => {
        sleep(2000).then(() => {
            dispatch(createAction('SET_LOADING', false))
        })
    }, [])

    return { auth, state }
}

