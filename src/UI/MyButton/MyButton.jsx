import React from 'react';
import {Button} from "@mui/material";
import cl from './MyButton.module.css'

const MyButton = ({children, variant, color, ...props}) => {

    const rootClasses = [cl.Main]

    if(variant === 'text') {
        rootClasses.push(cl.Text)
    }

    return (
        <Button className={rootClasses.join(' ')} {...props} variant={variant} color={color}>{children}</Button>
    );
};

export default MyButton;