import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    MainSectionContainer,
    MainPartInfo,
    MainSectionDetails,
    TagsContainer,
    Tag,
    MainSectionImage,
    MainSectionTitle,
    MainSectionDescription,
    FormFieldsContainer,
    FieldGroup,
    MainSectionLabel,
    MainSectionInput,
    MainSectionSelect,
    BottomSection,
    MainSectionPrice,
    ButtonsContainer,
    MainSectionButtonGoBack,
    MainSectionButtonAddToCart
} from "./main_section.styled";
import CarImg1 from "../../../../Icons/car1.png";
import CarImg2 from "../../../../Icons/car2.png";
import CarImg3 from "../../../../Icons/car3.png";

// Дані товарів
const data = [
    { 
        id: 1,
        title: "Green Car 1",
        description: "This is a great green car with excellent features and performance.",
        imageSrc: CarImg1, 
        price: "250",
        color: "green",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 2,
        title: "Red Car 2",
        description: "This is a stunning red car that offers a smooth ride and top-notch safety.",
        imageSrc: CarImg2, 
        price: "100",
        color: "red",
        priceCategory: "About",
        type: "Solo_car"
    },
    { 
        id: 3,
        title: "Orange Car 3",
        description: "This is a vibransdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadaFIAdfhFHifhaHFIAhfihaFIHifhit orange car that combines style with cool performance.",
        imageSrc: CarImg3, 
        price: "320",
        color: "orange",
        priceCategory: "About",
        type: "Set"
    }
];

const MainSection = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const itemIndex = parseInt(id) % data.length;
    const item = data[itemIndex];
    
    if (!item) {
        return <div>Товар не знайдено</div>;
    }

    const handleGoBack = () => {
        navigate('/catalog');
    };

    return (
        <MainSectionContainer>
            <MainPartInfo>
                <MainSectionImage src={item.imageSrc} alt={item.title} />
                <MainSectionDetails>
                    <TagsContainer>
                        <Tag primary>1 characteristic</Tag>
                        <Tag>2 characteristic</Tag>
                    </TagsContainer>
                    <MainSectionTitle>{item.title}</MainSectionTitle>
                    <MainSectionDescription>{item.description}</MainSectionDescription>
                    <FormFieldsContainer>
                        <FieldGroup>
                            <MainSectionLabel htmlFor="color">Countable field</MainSectionLabel>
                            <MainSectionInput type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                        </FieldGroup>
                        <FieldGroup>
                            <MainSectionLabel htmlFor="color">Selectable Field</MainSectionLabel>
                            <MainSectionSelect id="color" name="color" value={item.color}>
                                <option value={item.color}>{item.color}</option>
                            </MainSectionSelect>
                        </FieldGroup>
                    </FormFieldsContainer>
                </MainSectionDetails>                    
            </MainPartInfo>            
            <BottomSection>
                <MainSectionPrice>Price: ${item.price}.00</MainSectionPrice>
                <ButtonsContainer>
                    <MainSectionButtonGoBack onClick={handleGoBack}>Go back</MainSectionButtonGoBack>
                    <MainSectionButtonAddToCart>Add to cart</MainSectionButtonAddToCart>
                </ButtonsContainer>
            </BottomSection>
        </MainSectionContainer>
    );
};

export default MainSection;
