import { useEffect } from "react";

const ToggleTheme = ({ theme, setTheme }) => {
    // Update the document root class based on the theme
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
            root.classList.remove("light");
        } else if (theme === "light") {
            root.classList.add("light");
            root.classList.remove("dark");
        } else {
            // System preference
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            root.classList.toggle("dark", prefersDark);
            root.classList.toggle("light", !prefersDark);
        }

        // Save the theme in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between dark, light, and system
    const toggleTheme = () => {
        setTheme(prev =>
            prev === "dark" ? "light" : prev === "light" ? "system" : "dark"
        );
    };

    return (
        <button onClick={toggleTheme}>
            Switch Theme (Current: {theme})
        </button>
    );
};

export default ToggleTheme;