import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({ variant = "primary", className = "", children, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-xl";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-sm",
    secondary: "bg-secondary text-primary hover:bg-opacity-80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={{ borderRadius: "16px" }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
