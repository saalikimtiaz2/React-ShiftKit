import React, { FC } from "react";

type AvatarTypes = {
    src: string;
    size?: "sm" | "md" | "lg" | "xl";
    isRounded?: boolean;
    isOnline?: boolean;
    name?: string;
};

export const Avatar: FC<AvatarTypes> = ({
    src,
    size = "sm",
    isRounded = false,
    isOnline = false,
    name = "avatar",
}) => {

    return (
        <div className='shiftkit-avatar-wrapper'>
            <img
                src={src}
                alt={name}
                className={`shiftkit-avatar shiftkit-avatar-size-${size} ${isRounded ? "shiftkit-rounded-full":"shiftkit-round-"+size} `}
            />
            
            {isOnline && (
                <div
                className={isRounded ? "shiftkit-round-avatar-online-"+size : "shiftkit-avatar-online" }
                />
            )}
        </div>
    );
};
