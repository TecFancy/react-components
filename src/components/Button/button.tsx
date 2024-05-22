import React from "react";
import classNames from "classnames";

interface ButtonProps {
    label?: string;
    className?: string;
    primary?: boolean;
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const {
        label,
        className,
        primary,
        disabled,
        onClick,
        children,
    } = props;

    return (
        <button
            aria-label={label}
            className={classNames('btn', className, {
                disabled,
                primary,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    label: 'button',
    primary: true,
    disabled: false,
};

export default Button;
