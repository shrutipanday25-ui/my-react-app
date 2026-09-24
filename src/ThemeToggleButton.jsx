import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function ThemeToggleButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleButton() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <button onClick={toggleButton}>
            Change Theme
        </button>
    );
}

export default ThemeToggleButton;