import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";
import React from "react";

export const userLogIn = ({user, setFetch, setError}) => {

    const error = [];

    signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setFetch(false)
            setError('')
            window.location.href = '/';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFetch(false)
            setError(errorCode)
        });
}
export const userSignUp = ({user, setFetch, setError}) => {

    const error = [];

    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setFetch(false)
            setError('')
            console.log(user);
            window.location.href = '/';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode)
            setFetch(false)
            console.log(errorCode);
            // ..
        });
}
export const userLogOut = () => {

    const error = [];

    signOut(auth).then(() => {
        console.log('Sign-out successful')
    }).catch((error) => {
        // An error happened.
    });

    return error
}

