import React, { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>,
  text: ReactNode,
  icon: ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, text, icon }) => {
  return (
    <div className="py-4 px-1">
      <button
        onClick={onClick}
        className="border-2 flex gap-2 items-center border-muted rounded-xl lg:px-8 md:px-6 px-4 py-2 hover:bg-foreground hover:text-primary-foreground"
      >
        {text} {icon}
      </button>
    </div>
  );
};

export default Button;
