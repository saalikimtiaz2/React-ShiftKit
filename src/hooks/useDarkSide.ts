import React, { useEffect, useState } from "react";

const useDarkSide = (defaultTheme:"light"|"dark"): [
    string,
    React.Dispatch<React.SetStateAction<string>>,
] => {
    // Get the theme from localStorage if it exists, otherwise default to 'dark'
    const [theme, setTheme] = useState<string>(() => {
        let savedTheme;
        if (typeof window !== "undefined") {
            savedTheme = window.localStorage.getItem("theme");
        }
        return savedTheme || defaultTheme;
    });

    const colorTheme: string = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        window.localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
};

export default useDarkSide;
