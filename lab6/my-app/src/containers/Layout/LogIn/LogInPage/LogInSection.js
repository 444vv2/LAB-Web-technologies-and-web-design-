import React, { useState } from "react";
import { 
    LogInSectionWrapped,
    Title,
    Form,
    Input,
    SubmitButton,
    Text,
    Link,
    PasswordDiv,
    ShowPasswordButton,
    ShowPasswordIcon
} from "./LogInSection.styled";
import { useNavigate } from "react-router-dom";
import showPassword from "../../../../Icons/showPassword.png";

const LogInSection = ({ onLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const storedUser = localStorage.getItem('user');
        
        if (!storedUser) {
            alert('User not found! Please sign up first.');
            return;
        }

        const userData = JSON.parse(storedUser);
        
        if (userData.username === username && userData.password === password) {
            localStorage.setItem('isAuthenticated', 'true');
            
            if (onLogin) {
                onLogin();
            }
            navigate("/cart");
        } else {
            alert('Invalid username or password!');
        }
    }

    const handleShowPassword = () => {
        const passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    };

    return(
        <LogInSectionWrapped>
            <Form onSubmit={handleSubmit}>
                <Title>Submit form to sign in</Title>
                <Input 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <SubmitButton type="submit">Log In</SubmitButton>
            </Form>
            <Text>Don't have an account? <Link href="/signin">Sign Up</Link></Text>
        </LogInSectionWrapped>
    );
};

export default LogInSection;