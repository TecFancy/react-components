import React from "react";
import classNames from "classnames";

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'primary' | 'secondary' | 'warning';

interface ButtonProps {
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional class name
     */
    className?: string;
    /**
     * How large should the button be?
     */
    size?: ButtonSize,
    /**
     * What type of button is it?
     */
    type?: ButtonType,
    /**
     * Is the button disabled?
     */
    disabled?: boolean,
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/** Primary UI component for user interaction */
const Button = ({
    label,
    className,
    size = 'medium',
    type: btnType = 'secondary',
    disabled = false,
}: ButtonProps) => {

    const classes = classNames("btn", className, {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        'btn-disabled': disabled,
    });

    return (
        <button
            type="button"
            className={classes}
        >
            {label}
        </button>
    );
};

export default Button;
