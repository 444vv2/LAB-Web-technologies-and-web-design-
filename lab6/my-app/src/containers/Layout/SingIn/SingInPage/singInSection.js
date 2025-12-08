import React, { useState } from "react";
import {
    SingInSectionWrapped,
    Title,
    Form,
    Input,
    SubmitButton,
    Text,
    Link,
    PasswordDiv,
    ShowPasswordButton,
    ShowPasswordIcon
} from "./singInSection.styled";
import { useNavigate } from "react-router-dom";
import showPassword from "../../../../Icons/showPassword.png";

const SingInSection = ({ onSignIn }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        const userData = {
            username: username,
            email: email,
            password: password,
            registrationDate: new Date().toISOString()
        };
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        
        if (onSignIn) {
            onSignIn();
        }
        navigate("/cart");
    }

    const handleShowPassword = () => {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    };

    const handleShowRepeatPassword = () => {
        const repeatPasswordInput = document.getElementById("repeatPassword");
        if (repeatPasswordInput.type === "password") {
            repeatPasswordInput.type = "text";
        } else {
            repeatPasswordInput.type = "password";
        }
    };

    return(
        <SingInSectionWrapped>
            <Title>Register the new account</Title>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <PasswordDiv>
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <ShowPasswordButton type="button" onClick={handleShowPassword}>
                    <ShowPasswordIcon src={showPassword} alt="Show Password" />
                </ShowPasswordButton>
                </PasswordDiv>
                <PasswordDiv>
                    <Input 
                        type="password" 
                        placeholder="Repeat Password" 
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                    />
                    <ShowPasswordButton type="button" onClick={handleShowRepeatPassword}>
                    <ShowPasswordIcon src={showPassword} alt="Show Password" />
                </ShowPasswordButton>
                </PasswordDiv>
                <SubmitButton type="submit">Sign me up</SubmitButton>

            </Form>
            <Text>Already have an account? <Link href="/login">Log In</Link></Text>
        </SingInSectionWrapped>
    );
};

export default SingInSection;