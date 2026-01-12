import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./Components/Counter";
import AboutPage from "./pages/About/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/About/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext, useMemo, useState} from "react";
import './styles/index.scss'
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme } = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense  fallback={<div> Loading ... </div>}>
                <Routes>
                        <Route path={ '/about'} element={<AboutPageAsync/>}></Route>
                        <Route path={ '/'} element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;