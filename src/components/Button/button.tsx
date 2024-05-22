import React from "react";
import classNames from "classnames";

interface ButtonProps {
    label?: string;
    className?: string;
    disabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const {
        label,
        className,
        disabled,
        onClick,
        children,
    } = props;

    return (
        <button
            aria-label={label}
            className={classNames('btn', className, {
                disabled,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    label: 'button',
    disabled: false,
};

export default Button;
