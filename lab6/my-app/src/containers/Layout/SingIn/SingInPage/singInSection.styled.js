import styled from "styled-components";

export const SingInSectionWrapped = styled.div`
    min-height: 100vh;
    padding: 40px 20px;
    background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const Title = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
    color: #ffffff;
    text-align: center;
    font-family: 'Arial', sans-serif;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.05);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid rgba(255, 107, 53, 0.3);
    backdrop-filter: blur(10px);
`;

export const Input = styled.input`
    padding: 14px 16px;
    font-size: 16px;
    border: 1px solid rgba(255, 107, 53, 0.5);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;

    &::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    &:focus {
        outline: none;
        border-color: #ff6b35;
        background: rgba(255, 255, 255, 0.12);
        box-shadow: 0 0 12px rgba(255, 107, 53, 0.3);
    }
`;

export const SubmitButton = styled.button`
    padding: 14px 20px;
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(135deg, #ff6b35 0%, #ffaa00 100%);
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Arial', sans-serif;
    transition: all 0.3s ease;
    margin-top: 10px;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const Text = styled.p`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    text-align: center;
    font-family: 'Arial', sans-serif;
`;

export const Link = styled.a`
    color: #ff6b35;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: #ffaa00;
        text-decoration: underline;
    }
`;

export const PasswordDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 8px;

    ${Input} {
        flex: 1;
    }
`;

export const ShowPasswordButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`;

export const ShowPasswordIcon = styled.img`
    width: 20px;
    height: 20px;
    filter: brightness(0.9) drop-shadow(0 0 2px rgba(255, 107, 53, 0.5));
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(1.1) drop-shadow(0 0 4px rgba(255, 107, 53, 0.8));
    }
`;