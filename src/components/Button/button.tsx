import React from "react";
import classNames from "classnames";

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
    label?: string;
    className?: string;
    size?: ButtonSize,
}

const Button = (props: ButtonProps) => {
    const {
        label = 'button',
        className,
        size = 'medium',
    } = props;

    const classes = classNames("btn", className, {
        [`btn-${size}`]: size,
    });

    return (
        <button
            className={classes}
        >
            {label}
        </button>
    );
};

export default Button;
