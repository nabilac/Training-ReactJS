import React from 'react';

const Button = (props) => {
    return(
        <button
        onClick={props.onClick}
        color={props.color}
        >
            {props.title}
        </button>
    )
}

export default Button;