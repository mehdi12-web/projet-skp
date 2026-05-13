import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-white p-6 shadow-card ${className}`}
      style={{ borderRadius: "16px" }}
    >
      {children}
    </div>
  );
};

export default Card;
