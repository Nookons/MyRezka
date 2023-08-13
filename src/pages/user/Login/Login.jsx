import React, {useEffect, useState} from 'react';
import cl from '../Login.module.css'
import MyTextField from "../../../UI/MyTextField/MyTextField";
import MyButton from "../../../UI/MyButton/MyButton";
import url from '../../../utils/URL.json'
import {userLogIn} from "../../../utils/user";
import {Skeleton} from "@mui/material";
import MyAlert from "../../../UI/MyAlert/MyAlert";


const Login = () => {

    const [email, setEmail] = useState('nookon@iclodud.com');
    const [password, setPassword] = useState('12345678');


    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');


    const [error, setError] = useState('')
    const shortError = error.split('/')

    console.log(shortError[1])

    let alert = false;

    if (error.length) {
        alert = true;
    }


    const [fetch, setFetch] = useState(false)

    const logIn = async () => {
        setFetch(true)
        const user = {
            email: email,
            password: password
        }

        const response = await userLogIn({user, setFetch, setError})
    }

    return (
        <div className={cl.Main}>

            <MyAlert
                visible={alert}
                severity='error'
            >
                {shortError[1]}
            </MyAlert>

            <div className={cl.LeftSide}>
                <form className={cl.UserFrom} action="">
                    <h1>Hey there!</h1>
                    <h4>Welcome to My Rezka</h4>
                    <MyButton> Log in with Google</MyButton>
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
                    <a style={{marginRight: 12}} href="#">Forgot password?</a>
                    {!fetch
                        ?
                        <MyButton onClick={logIn}>Log In</MyButton>
                        :
                        <Skeleton style={{margin: '50px auto'}} variant="rounded" width={116.5} height={32.5}/>
                    }
                    <div className={cl.SignUpBlock}>
                        <span>Dont have account :</span>
                        <a style={{marginRight: 12}} href="/registration">Sign Up</a>
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