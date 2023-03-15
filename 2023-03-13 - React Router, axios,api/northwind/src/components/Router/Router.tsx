import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../HomeArea/Home/Home';
import About from '../AboutArea/About/About';
import React, { FC } from 'react';
import styles from './Router.module.scss';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProductsArea from '../ProductsArea/ProductsArea';

interface RouterProps { }

const Router: FC<RouterProps> = () => (
    <Routes>
        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<ProductsArea />} />

        {/* About */}
        <Route path="/about" element={<About />} />


        {/*  Default route*/}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Page not Found */}
        <Route path="*" element={<PageNotFound />} />

    </Routes>
);

export default Router;

