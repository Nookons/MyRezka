import React from 'react';
import {Link} from "react-router-dom";
import {publicRoutes} from "../../routes";
import MyButton from "../../components/MyButton/MyButton";
import cl from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={cl.Main}>
            <div style={{display: "flex", gap: 14, alignItems: 'center'}}>
                <div className={cl.Avatar}>
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="My personal Avatar"/>
                </div>
                <h1>MyRezka</h1>
            </div>
            <div className={cl.NavLinks}>
                {publicRoutes.map(({path, label}) =>
                    <Link to={path}>
                        <MyButton
                            variant="contained"
                        >
                            {label}
                        </MyButton>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default Navbar;