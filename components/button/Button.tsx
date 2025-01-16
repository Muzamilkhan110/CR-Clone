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
      className={ `bg-useclass px-6 py-3 text-center text-white rounded-xl text-sm font-bold
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
