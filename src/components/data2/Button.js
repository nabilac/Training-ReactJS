import React from 'react';

// Material UI
import ButtonForm from '@material-ui/core/Button';

const Button = (props) => {
    return (
        <div>
            <ButtonForm
                variant={props.variant}
                color={props.color}
                onClick={props.onClick}
            >
                {props.title}
            </ButtonForm>
        </div>
    )
}

export default Button