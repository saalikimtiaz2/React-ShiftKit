import React from "react";

 const If = ({ isTrue, children }: { isTrue: boolean; children: React.ReactNode }) => {
    return isTrue ? <>{children}</> : null;
};

export default If
