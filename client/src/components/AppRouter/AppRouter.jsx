import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../../routes.js';


const AppRouter = () => {
    const isAuth = false

    return( 
        <Routes>
            {/* {ifAuth === true && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact />
            )} */}


            {publicRoutes.map(({path, Component, title}) =>
                <Route key={path} path={path} element={<Component title={title} />} />
            )}

            {/* This is how a singe route must be rendered */}
            {/* <Route exact path='/about' element={<About/>}/> */}

            <Route element={<Navigate to='/about' />} />
        </Routes>
        
    );
}
export default AppRouter;