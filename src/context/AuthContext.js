import React, { createContext, useState, useEffect, useContext } from 'react'; 
import {auth} from '../firebase-config';

const AuthContext = createContext(); //aqui creo el contexto
export const useAuth = () => useContext(AuthContext); //aqui exporto el contexto que creé

export const AuthProvider = (props) => { //aqui exporto el authprovider

       //usuario-actual setUsuarioActual
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
    }, [])

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
    const logout = () => auth.signOut();

    const value = {signup, login, logout, currentUser};

    return (
        <AuthContext.Provider value={value}>
          {props.children}
        </AuthContext.Provider>
    )
}
