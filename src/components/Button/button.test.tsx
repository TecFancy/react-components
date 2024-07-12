import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../../index';

describe('Button Component', () => {
  test('renders with default props', () => {
    render(<Button label="Default Button" />);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn btn-medium btn-secondary');
  });

  test('applies custom class name', () => {
    render(<Button label="Custom Button" className="custom-class" />);
    const buttonElement = screen.getByText(/Custom Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('renders with different sizes', () => {
    render(<Button label="Small Button" size="small" />);
    const smallButton = screen.getByText(/Small Button/i);
    expect(smallButton).toBeInTheDocument();
    expect(smallButton).toHaveClass('btn btn-small btn-secondary');

    render(<Button label="Large Button" size="large" />);
    const largeButton = screen.getByText(/Large Button/i);
    expect(largeButton).toBeInTheDocument();
    expect(largeButton).toHaveClass('btn btn-large btn-secondary');
  });

  test('renders with different types', () => {
    render(<Button label="Primary Button" type="primary" />);
    const primaryButton = screen.getByText(/Primary Button/i);
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveClass('btn btn-medium btn-primary');

    render(<Button label="Warning Button" type="warning" />);
    const warningButton = screen.getByText(/Warning Button/i);
    expect(warningButton).toBeInTheDocument();
    expect(warningButton).toHaveClass('btn btn-medium btn-warning');
  });

  test('applies disabled state', () => {
    render(<Button label="Disabled Button" disabled />);
    const disabledButton = screen.getByText(/Disabled Button/i);
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toHaveClass(
      'btn btn-medium btn-secondary btn-disabled'
    );
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/Click Me/i);
    buttonElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
