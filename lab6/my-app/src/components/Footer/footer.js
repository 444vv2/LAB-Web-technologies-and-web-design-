import React from "react";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import {
    FooterContainer, 
    FooterContent,
    FooterSection,
    FooterText, 
    IconBase, 
    FooterLogo,
    SocialIcons
} from "./footer.styled.js";
import HotWheelsLogo from "../../Icons/hot_wheels_logo.png"; 

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <FooterLogo src={HotWheelsLogo} alt="Hot Wheels Logo" />
                    <p>
                        Ваш найкращий магазин колекційних моделей автомобілів Hot Wheels. 
                        Якість та стиль для справжніх поціновувачів!
                    </p>
                    <SocialIcons>
                        <IconBase component={YoutubeOutlined} />
                        <IconBase component={TwitterOutlined} />
                        <IconBase component={LinkedinOutlined} />
                        <IconBase component={InstagramOutlined} />
                    </SocialIcons>
                </FooterSection>
            </FooterContent>
            
            <FooterText>
                &copy; 2025 Hot Wheels Collection.
            </FooterText>
        </FooterContainer>
    );
};

export default Footer;