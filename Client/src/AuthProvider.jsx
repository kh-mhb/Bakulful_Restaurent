import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import app from './Firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const [fvrtarray, setfvrtarray] = useState([]);
    const SignInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const SignInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const updateInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, SignInGoogle, SignInGithub, loading, setLoading, logIn, logOut, signUp, updateInfo, fvrtarray, setfvrtarray };
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }

        </AuthContext.Provider>
    );
};

export default AuthProvider;