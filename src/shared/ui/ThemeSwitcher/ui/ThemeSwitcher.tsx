import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            TOGGLE
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </button>

    );
};
