import React, { ReactNode } from 'react';

// `<Show>` Component
 const Show = ({ children }: { children: ReactNode }) => {
    const validChild = React.Children.toArray(children).find((child: any) => {
        return child.type === Show.When && child.props.isTrue;
    });

    if (!validChild) {
        return React.Children.toArray(children).find((child: any) => child.type === Show.Else) || null;
    }

    return validChild;
};

Show.When = ({ isTrue, children }: { isTrue: boolean; children: ReactNode }) => {
    return isTrue ? <>{children}</> : null;
};

Show.Else = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
};


export default Show