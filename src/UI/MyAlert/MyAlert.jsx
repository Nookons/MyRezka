import React from 'react';
import {Alert} from "@mui/material";
import cl from './MyAlert.module.css'

const MyAlert = ({children, severity, visible, ...props}) => {

    const rootClasses = [cl.Main]

    if (visible) {
        rootClasses.push(cl.Active)
    }

    return (
        <Alert className={rootClasses.join(' ')} severity={severity}>{children}</Alert>
    );
};

export default MyAlert;