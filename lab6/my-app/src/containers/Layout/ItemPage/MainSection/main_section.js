import {React, useState, useEffect} from "react";
import axios from "axios";
import { API_URL } from "../../../../constants/constants.js";
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
import { getCarImage } from "../../../../utils/imageUtils.js";
import LoadingSpinner from "../../../../components/Loader/loadingSpinner.js";

const MainSection = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [carData, setСarData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchcarData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}${id}/`);
                setСarData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchcarData();
    }, [id]);

    if (loading) {
        return <LoadingSpinner />;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleGoBack = () => {
        navigate('/catalog');
    };

    return (
        <MainSectionContainer>
            <MainPartInfo>
                <MainSectionImage src={getCarImage(carData.image_url)} alt={carData.title} />
                <MainSectionDetails>
                    <TagsContainer>
                        <Tag primary>1 characteristic</Tag>
                        <Tag>2 characteristic</Tag>
                    </TagsContainer>
                    <MainSectionTitle>{carData.title}</MainSectionTitle>
                    <MainSectionDescription>{carData.description}</MainSectionDescription>
                    <FormFieldsContainer>
                        <FieldGroup>
                            <MainSectionLabel htmlFor="color">Countable field</MainSectionLabel>
                            <MainSectionInput type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
                        </FieldGroup>
                        <FieldGroup>
                            <MainSectionLabel htmlFor="color">Selectable Field</MainSectionLabel>
                            <MainSectionSelect id="color" name="color" value={carData.color}>
                                <option value={carData.color}>{carData.color}</option>
                            </MainSectionSelect>
                        </FieldGroup>
                    </FormFieldsContainer>
                </MainSectionDetails>                    
            </MainPartInfo>            
            <BottomSection>
                <MainSectionPrice>Price: ${carData.price}.00</MainSectionPrice>
                <ButtonsContainer>
                    <MainSectionButtonGoBack onClick={handleGoBack}>Go back</MainSectionButtonGoBack>
                    <MainSectionButtonAddToCart>Add to cart</MainSectionButtonAddToCart>
                </ButtonsContainer>
            </BottomSection>
        </MainSectionContainer>
    );
};

export default MainSection;
