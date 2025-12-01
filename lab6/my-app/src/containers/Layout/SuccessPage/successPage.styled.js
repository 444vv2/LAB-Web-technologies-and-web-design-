import styled from "styled-components";

export const SuccessPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff6b35, #ffaa00);
    }
`;

export const SuccessImage = styled.img`
    margin: 30px 0;
    width: 300px;
    height: auto;
`;

export const SuccessTitle = styled.h1`
    font-size: 36px;
`;

export const SuccessMessage = styled.p`
    font-size: 18px;
`;

export const GoBackButton = styled.button`
    padding: 15px 30px;
    background: linear-gradient(135deg, #ff6b35, #ffaa00);
    color: #ffffff;
    border: 2px solid #ff6b35;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    margin: 50px 0;
    
    &:hover {
        background: linear-gradient(135deg, #ffaa00, #ff6b35);
        border-color: #ffaa00;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
`;