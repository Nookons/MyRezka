import React, {useEffect, useState} from 'react';
import cl from '../Login.module.css'
import MyTextField from "../../../UI/MyTextField/MyTextField";
import MyButton from "../../../UI/MyButton/MyButton";
import url from '../../../utils/URL.json'
import {userLogIn, userSignUp} from "../../../utils/user";
import {Skeleton} from "@mui/material";
import MyAlert from "../../../UI/MyAlert/MyAlert";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const [error, setError] = useState('')
    const shortError = error.split('/')

    let myAlert = false;

    if (error.length) {
        myAlert = true;
    }


    const [fetch, setFetch] = useState(false)

    const signUp = async () => {

        const provider = email.split('@')

        if(provider[1] !== 'gmail.com' && provider[1] !== 'icloud.com' ) {
            alert('You email not correctly');
        }
        else if (checkPassword !== password || password.length < 8) {
            alert('Wrong password')
        }
        else {
            setFetch(true)
            const user = {
                email: email,
                password: password
            }

            const response = await userSignUp({user, setFetch, setError})
        }
    }

    return (
        <div className={cl.Main}>
            <MyAlert
                visible={myAlert}
                severity='error'
            >
                {shortError[1]}
            </MyAlert>
            <div className={cl.LeftSide}>
                <form className={cl.UserFrom} action="">
                    <h1>Hey there!</h1>
                    <h4>Welcome to My Rezka</h4>
                    <MyButton>Sign up by Google</MyButton>
                    <MyTextField
                        value={email}
                        setValue={setEmail}
                        type='default'
                        label='Email address'
                    />
                    <MyTextField
                        value={password}
                        setValue={setPassword}
                        type='password'
                        label='Your password'
                    />
                    <MyTextField
                        value={checkPassword}
                        setValue={setCheckPassword}
                        type='password'
                        label='Check password'
                    />
                    {!fetch
                        ?
                        <MyButton onClick={signUp}>Sign Up</MyButton>
                        :
                        <Skeleton style={{margin: '50px auto'}} variant="rounded" width={116.5} height={32.5}/>
                    }
                    <div className={cl.SignUpBlock}>
                        <span>You have account?</span>
                        <a style={{marginRight: 12}} href="/registration">Log In</a>
                    </div>
                </form>
            </div>
            <div className={cl.RightSide}>
                <img src={url.logInPage.main} alt=""/>
            </div>
        </div>
    );
};

export default Login;