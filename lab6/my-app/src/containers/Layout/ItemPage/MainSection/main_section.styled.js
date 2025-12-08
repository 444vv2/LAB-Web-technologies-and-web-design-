import styled from "styled-components";

export const MainSectionContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    padding: 40px 60px;
    background-color: #1a1a1a;
    color: white;
`;

export const MainPartInfo = styled.div`
    display: flex;
    gap: 60px;
    margin-bottom: 40px;
    align-items: center;
`;

export const MainSectionDetails = styled.div`
    max-width: 500px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const TagsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
`;

export const Tag = styled.span`
    background-color: ${props => props.primary ? '#ff6b35' : '#666'};
    color: white;
    padding: 6px 16px;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 500;
`;

export const MainSectionImage = styled.img`
    width: 600px;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    background-color: #2a2a2a;
    flex-shrink: 0;
    border: 2px solid #333;
`;

export const MainSectionTitle = styled.h1`
    align-content: start;
    font-size: 36px;
    font-weight: 700;
    color: #ff6b35;
    margin: 0;
`;

export const MainSectionDescription = styled.p`
    font-size: 16px;
    padding: 0 50p  x;
    max-width: 1200px;
    line-height: 1.7;
    color: #ccc;
    margin: 0;
`;

export const FormFieldsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 200px;
`;

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const MainSectionLabel = styled.label`
    font-size: 15px;
    font-weight: 600;
    color: #ff6b35;
`;

export const MainSectionInput = styled.input`
    width: 130px;
    padding: 10px 14px;
    border: 2px solid #444;
    border-radius: 6px;
    font-size: 15px;
    background-color: #2a2a2a;
    color: white;
    
    &:focus {
        outline: none;
        border-color: #ff6b35;
    }
`;  

export const MainSectionSelect = styled.select`
    width: 150px;
    padding: 10px 14px;
    border: 2px solid #444;
    border-radius: 6px;
    font-size: 15px;
    background-color: #2a2a2a;
    color: white;
    
    &:focus {
        outline: none;
        border-color: #ff6b35;
    }

    option {
        background-color: #2a2a2a;
        color: white;
    }
`;

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 2px solid #444;
`;

export const MainSectionPrice = styled.div`
    font-size: 32px;
    font-weight: 800;
    color: #ff6b35;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 12px;
`;

export const MainSectionButtonGoBack = styled.button`
    background-color: transparent;
    color: #ccc;
    border: 2px solid #666;
    border-radius: 8px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #333;
        border-color: #ff6b35;
        color: #ff6b35;
    }
`;

export const MainSectionButtonAddToCart = styled.button`
    background-color: #ff6b35;
    color: white;
    border: 2px solid #ff6b35;
    border-radius: 8px;
    padding: 14px 28px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: #e55a2b;
        border-color: #e55a2b;
        transform: translateY(-2px);
    }
`;