import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {publicRoutes, userRoutes} from "../../routes";
import MyButton from "../../UI/MyButton/MyButton";
import cl from './Navbar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {userLogOut} from "../../utils/user";

const Navbar = () => {

    const currentUrl = window.location.href;
    const short = currentUrl.split('/')
    const currentPage = short[3]

    const [user, loading, error] = useAuthState(auth);


    const logOut = async () => {
        const response = await userLogOut();

        console.log(response);
    }

    return (
        <div className={cl.Main}>
            <div style={{display: "flex", gap: 14, alignItems: 'center'}}>
                <a href='/' className={cl.Avatar}>
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="My personal Avatar"/>
                </a>
                <h1>MyRezka</h1>
            </div>
            {loading
                ?
                <div>Loading...</div>
                :
                <div className={cl.RightButtonBlock}>
                    {user
                        ?
                        <div className={cl.UserBlock}>
                            <AccountCircleIcon/>
                            <span>{user.email}</span>
                            <MyButton onClick={logOut}><LogoutIcon style={{fontSize: "12px !important"}}/></MyButton>
                        </div>
                        :
                        <div className={cl.NavLinks}>
                            <Link to='/login'>
                                <MyButton
                                    variant="contained"
                                >
                                    Login
                                </MyButton>
                            </Link>
                        </div>
                    }
                    {!user
                        ?
                        <div className={cl.NavLinks}>
                            {publicRoutes.map(({path, label}, index) =>
                                <Link key={index} to={path}>
                                    <MyButton
                                        variant="contained"
                                    >
                                        {label}
                                    </MyButton>
                                </Link>
                            )}
                        </div>
                        :
                        <div></div>
                    }
                </div>
            }
        </div>
    )
};

export default Navbar;