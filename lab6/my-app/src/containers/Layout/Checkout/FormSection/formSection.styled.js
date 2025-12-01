import styled from "styled-components";

export const CheckoutContainer = styled.div`
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
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

export const CheckoutTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
    font-family: 'Arial', sans-serif;
`;

export const FormSectionWrapper = styled.div`
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
`;

export const FormRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

export const FormField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #444;
    border-radius: 8px;
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    color: #ffffff;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: #ff6b35;
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1000px;
    margin: 100px 40px 0 40px;
`;

export const GoBackButton = styled.button`
    padding: 15px 30px;
    background: linear-gradient(145deg, #333, #222);
    color: #ffffff;
    border: 2px solid #444;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    
    &:hover {
        background: linear-gradient(145deg, #444, #333);
        border-color: #666;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }
    
    &:active {
        transform: translateY(0);
    }
`;

export const ContinueButton = styled.button`
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

export const FormErrorAlert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;