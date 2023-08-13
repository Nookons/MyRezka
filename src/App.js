import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./pages/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;