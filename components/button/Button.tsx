import React from 'react';

interface ButtonProps{
  text?:string;
  className?:string;
  onClick?: ()=> void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;

}
const Button: React.FC<ButtonProps> =({
  text,
  className= '',
  onClick ,
  type="button",
  disabled = false,

}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={ `bg-bguseclass text-xs px-4 py-2 md:px-6 md:py-4 text-center text-white rounded-lg  md:text-sm font-bold
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
