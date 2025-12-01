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
import Cartpage from "../Cartpage";
import Checkout from "../Checkout";
import SuccessPage from "../SuccessPage/successPage";

const Navigation = () => {
    return (
        <Router>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<ItemPage />} />
                    <Route path="/cart" element={<Cartpage />} />
                    <Route path="/cart/checkout" element={<Checkout />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </>
        </Router>
    );
};

export default Navigation;
