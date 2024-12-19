import './Button.scss';
import {useState} from "react";
const Button = ({disabled, style, type, onClick, children, className}) => {
    return (
        <button
            disabled={disabled}
            className={`button ${style ? `button_${style}` : ''} button_${type} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;