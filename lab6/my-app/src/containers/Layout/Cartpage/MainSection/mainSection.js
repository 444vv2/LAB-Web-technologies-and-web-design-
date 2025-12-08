import React from "react";
import { 
    MainSectionContainer, 
    Title, 
    CartItemsContainer,
    CartItem,
    ItemImage,
    ItemInfo,
    ItemTitle,
    QuantityControls,
    QuantityButton,
    QuantityDisplay,
    ItemPrice,
    TotalSection,
    TotalAmount,
    ButtonsContainer,
    GoBackButton, 
    ContinueButton
} from "./mainSection.styled";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCarImage } from "../../../../utils/imageUtils";
import { removeItemFromCart, editQuantity } from "../../../../store/cartSlice.js";  


const MainSection = () => {
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity <= 0) {
            dispatch(removeItemFromCart(id));
        } else {
            dispatch(editQuantity({ id, quantity: newQuantity }));
        }
    };

    return (
        <MainSectionContainer>
            <Title>Shopping Cart</Title>
            
            <CartItemsContainer>
                {cartItems.map((item) => (
                    <CartItem key={item.id}>
                        <ItemImage 
                            src={getCarImage(item.image_url)} 
                            alt={item.title}
                            onClick={() => navigate(`/catalog/${item.id}`)}
                            style={{cursor: 'pointer'}}
                        />
                        
                        <ItemInfo>
                            <ItemTitle>{item.title}</ItemTitle>
                        </ItemInfo>
                        
                        <QuantityControls>
                            <QuantityButton 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                                -
                            </QuantityButton>
                            <QuantityDisplay>{item.quantity}</QuantityDisplay>
                            <QuantityButton 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                                +
                            </QuantityButton>
                        </QuantityControls>
                        
                        <ItemPrice>${item.price * item.quantity}</ItemPrice>
                    </CartItem>
                ))}
            </CartItemsContainer>
            
            <TotalSection>
                <TotalAmount>Total amount: ${totalAmount}</TotalAmount>
            </TotalSection>
            
            <ButtonsContainer>
                <GoBackButton onClick={() => window.history.back()}>
                    Back to Catalog
                </GoBackButton>
                <ContinueButton onClick={() => navigate('/checkout')}>
                    Continue
                </ContinueButton>
            </ButtonsContainer>
        </MainSectionContainer>
    );
}

export default MainSection;