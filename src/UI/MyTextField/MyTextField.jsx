import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {OutlinedInput, TextField} from "@mui/material";
import cl from './MyTextField.module.css'

const MyTextField = ({type, label, value, setValue, ...props}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    if(type === 'password') {
        return (
            <div>
                <FormControl className={cl.Main} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                    <OutlinedInput
                        {...props}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label={label}
                    />
                </FormControl>
            </div>
        )
    }else if (type === 'default') {
        return (
            <TextField
                {...props}
                value={value}
                onChange={e => setValue(e.target.value)}
                className={cl.Main}
                id="outlined-basic"
                label={label}
                variant="outlined"
            />
        )
    }
};

export default MyTextField;