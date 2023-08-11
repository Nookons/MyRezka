import React from 'react';
import {Route, Routes, Outlet} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";

const AppRouter = () => {

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component} exact={true}/>
            )}
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} Component={Component} exact={true}/>
            )}
        </Routes>
    )
};

export default AppRouter;