import {
    CALCULATE_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    MOVIE_ROUTE,
    REGISTRATION_ROUTE,
    TELEGRAM_ROUTE
} from "./utils/consts";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import SoloPage from "./pages/SoloPage/SoloPage";
import Login from "./pages/user/Login/Login";
import Registration from "./pages/user/Registration/Registration";
import Telegram from "./pages/telegram/Telegram";


// routes for users
export const publicRoutes = [
    {
        path: CALCULATE_ROUTE,
        Component: Films,
        label: 'Home',
    },
]


// routes who users doesn't see
export const privateRoutes = [
    {
        path: MOVIE_ROUTE,
        Component: SoloPage,
    },
    {
        path: TELEGRAM_ROUTE,
        Component: Telegram,
    },
]

// Users routes
export const userRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
        label: 'Login'
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
        Label: 'Registration'
    },
]
