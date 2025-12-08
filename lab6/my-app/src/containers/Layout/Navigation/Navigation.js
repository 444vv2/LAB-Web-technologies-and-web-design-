import { React, useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";
import Home from "../Home";
import Catalog from "../Catalog";
import Header from "../../../components/Header/header";
import ItemPage from "../ItemPage";
import Cartpage from "../Cartpage";
import Checkout from "../Checkout";
import SuccessPage from "../SuccessPage/successPage";
import LogInSection from "../LogIn/LogInPage/LogInSection";
import SingInSection from "../SingIn/SingInPage/singInSection";

const ProtectedRoute = ({ element, isAuthenticated, redirectTo = "/" }) => {
    return isAuthenticated ? element : <Navigate to={redirectTo} replace />;
};

const HeaderWrapper = ({ isAuthenticated, onLogout }) => {
    const location = useLocation();
    
    if (location.pathname === '/login' || location.pathname === '/signin') {
        return null;
    }
    
    return <Header isAuthenticated={isAuthenticated} onLogout={onLogout} />;
};

const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const handleLogin = () => {
        setIsAuthenticated(true);
    };
  
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <HeaderWrapper isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <Routes>
                    <Route 
                        path="/" 
                        element={<ProtectedRoute element={<Home />} isAuthenticated={isAuthenticated} redirectTo="/signin" />}
                    />
                    <Route 
                        path="/catalog" 
                        element={<ProtectedRoute element={<Catalog />} isAuthenticated={isAuthenticated} redirectTo="/signin" />}
                    />
                    <Route 
                        path="/catalog/:id" 
                        element={<ProtectedRoute element={<ItemPage />} isAuthenticated={isAuthenticated} redirectTo="/signin" />} 
                    />
                    
                    <Route 
                        path="/login" 
                        element={<LogInSection onLogin={handleLogin} />} 
                    />
                    <Route 
                        path="/signin" 
                        element={<SingInSection onSignIn={handleLogin} />} 
                    />
                    
                    <Route 
                        path="/cart" 
                        element={<ProtectedRoute element={<Cartpage />} isAuthenticated={isAuthenticated} redirectTo="/signin" />} 
                    />
                    <Route 
                        path="/checkout" 
                        element={<ProtectedRoute element={<Checkout />} isAuthenticated={isAuthenticated} redirectTo="/signin" />} 
                    />
                    <Route 
                        path="/success" 
                        element={<ProtectedRoute element={<SuccessPage />} isAuthenticated={isAuthenticated} redirectTo="/signin" />} 
                    />
                </Routes>
        </Router>
    );
};

export default Navigation;
