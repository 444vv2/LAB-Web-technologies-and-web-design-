import React from "react";
import { useNavigate } from "react-router-dom";
import success_image from "../../../Icons/success_image.png";
import {
    SuccessPageWrapper,
    SuccessImage,
    SuccessTitle,
    SuccessMessage,
    GoBackButton
} from "./successPage.styled";

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/catalog");
    };

    return (
        <SuccessPageWrapper>
            <SuccessImage src={success_image} alt="Success" />
            <SuccessTitle>Success!</SuccessTitle>
            <SuccessMessage>Your order was sent to processing.</SuccessMessage>
            <SuccessMessage>Check your email box for further information.</SuccessMessage>
            <GoBackButton onClick={handleGoBack}>Go back to catalog</GoBackButton>
        </SuccessPageWrapper>
    );
};

export default SuccessPage;