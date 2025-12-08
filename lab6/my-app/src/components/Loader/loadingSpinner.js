import React from 'react';
import LoadingSpinnerStyled from './loader.styled.js';

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerStyled>
            <div className="loader">Loading...</div>
        </LoadingSpinnerStyled>
    );
};

export default LoadingSpinner;