import {LOCAL_STORAGE_THEME, Theme, ThemeContext} from "./ThemeContext";
import {Link} from "react-router-dom";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme
}
export function useTheme (): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
    }
    return { theme,
        toggleTheme}

}