import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";
import Header from "../../../components/Header/header";
import ItemPage from "../ItemPage";

const Navigation = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ItemPage />} />
                    <Route path="/cart" element={<h2>Cart Page</h2>} />
                </Routes>
            </div>
        </Router>
    );
};

export default Navigation;