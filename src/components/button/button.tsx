import React from "react";

interface ButtonProps {
    label?: string;
    onClick: () => void;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    const {
        label,
        onClick,
        children,
    } = props;

    return (
        <button
            aria-label={label}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    label: 'button',
};

export default Button;
