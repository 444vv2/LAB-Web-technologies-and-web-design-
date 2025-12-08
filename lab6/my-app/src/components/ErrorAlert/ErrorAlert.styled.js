import styled from 'styled-components';

export const ErrorAlertContainer = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(200, 20, 35, 1);
    border: 2px solid rgba(239, 6, 29, 1);
    color: #ffffff;
    padding: 12px 16px;
    border-radius: 8px;
    margin: 0 0 20px 0;
    font-size: 14px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        transition: all 0.2s ease-in-out;
    }
`;

export const ErrorText = styled.span`
    flex: 1;
    
    strong {
        color: #f1f1f1;
        font-weight: 600;
        margin-right: 8px;
    }

    #message {
        color: #f1f1f1;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
    margin-left: 12px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 1;
    }
    
    &:focus {
        outline: none;
    }

`;