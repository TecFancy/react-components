import React from 'react';
import styled from '@emotion/styled';
import classNames from 'classnames';

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
  size?: ButtonSize;
  /**
   * What type of button is it?
   */
  type?: ButtonType;
  /**
   * Is the button disabled?
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button(
  {
    backgroundColor: '#007bff',
  },
  {
    label: 'custom-styled-button',
  }
);

/** Primary UI component for user interaction */
const Button = ({
  label,
  className,
  size = 'medium',
  type: btnType = 'secondary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const classes = classNames(
    'btn',
    {
      [`btn-${size}`]: size,
      [`btn-${btnType}`]: btnType,
      'btn-disabled': disabled,
    },
    className
  );

  return (
    <StyledButton type="button" className={classes} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
