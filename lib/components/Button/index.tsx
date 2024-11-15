
import React, { FC } from "react";


type buttonProps = {
    children: React.ReactNode;
    name?: string | React.ReactNode;
    block?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    roundness?:"none"|"sm"|"md"|"lg"|"xl"|"full"
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "primary-outline" | "secondary-outline"|"danger"|"scuccess"|"warning";
    isLoading?: boolean;
    ariaLabel?: string;
};

     const Button:FC<buttonProps> = ({
   children,
       icon,
    onClick,
    className,
    size = "md",
    variant = "primary",
    type,
    disabled,
    isLoading,
    ariaLabel,
    roundness="none"
}) => {

        return (
            <button
                
                className={`${className} shiftkit-btn btn-varient-${variant} btn-size-${size} btn-roundness-${roundness}`}
                type={type}
                onClick={onClick}
                disabled={disabled}
                aria-label={ariaLabel}
            >
               
                    {isLoading ? (
                        "Loading..."
                    ) : (
                        icon && icon
                    )}
                    {children}
        
            </button>
        );
   
};

export default Button