import React from 'react';

// Material UI
import TextField from '@material-ui/core/TextField';


const Input = (props) => {
    return (
        <div className="from-group" >
            <TextField
                label={props.title}
                variant="outlined"
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input