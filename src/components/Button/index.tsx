import React, { ReactElement } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }): ReactElement => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
