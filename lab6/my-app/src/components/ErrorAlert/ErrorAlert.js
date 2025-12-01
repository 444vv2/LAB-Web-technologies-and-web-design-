import React from 'react';
import { ErrorAlertContainer, ErrorText, CloseButton } from './ErrorAlert.styled';

const ErrorAlert = ({ message, onClose }) => {

    const handleCloseAlert = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <ErrorAlertContainer>
            <ErrorText>
                <strong>Oh snap!</strong> {message}
            </ErrorText>
            <CloseButton onClick={handleCloseAlert}>
                ×
            </CloseButton>
        </ErrorAlertContainer>
    );
};

export default ErrorAlert;