import {CALCULATE_ROUTE, HOME_ROUTE, MOVIE_ROUTE} from "./utils/consts";
import Home from "./pages/Home/Home";
import Films from "./pages/Films/Films";
import SoloPage from "./pages/SoloPage/SoloPage";


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
]
