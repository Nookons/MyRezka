import React from 'react';
import {Button} from "@mui/material";
import cl from './MyButton.module.css'

const MyButton = ({children, variant, color, ...props}) => {
    return (
        <Button className={cl.Main} {...props} variant={variant} color={color}>{children}</Button>
    );
};

export default MyButton;