import React from "react";

type DrawerProps = {
    isOpen: boolean;
    closeDrawer: () => void;
    children: React.ReactNode;
    direction?: "right" | "left";
    className?: string;
};

function Drawer({
    isOpen,
    closeDrawer,
    children,
    direction = "right",
    className
}: DrawerProps) {
    if(isOpen)
    return (
   <div className="drawer-backdrop" onClick={closeDrawer}>
    <div className={`drawer-container ${direction} ${className}`}>
        {children}
    </div>
   </div>
    );
    return null
}

export default Drawer;
