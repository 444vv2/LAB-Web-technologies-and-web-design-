import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {
    CheckoutContainer,
    CheckoutTitle,
    FormSectionWrapper,
    FormRow,
    FormField,
    FormInput,
    FormLabel,
    ButtonsContainer,
    GoBackButton,
    ContinueButton,
    FormErrorAlert
} from "./formSection.styled";
import ErrorAlert from "../../../../components/ErrorAlert/ErrorAlert";

const AllFormErrors = ({ errors, touched }) => {
    const [showError, setShowError] = useState(true);
    
    const errorMessages = Object.keys(errors)
        .filter(key => touched[key] && errors[key])
        .map(key => errors[key]);
    
    if (!showError || errorMessages.length === 0) return null;
    
    const combinedMessage = errorMessages.join('. ');
    
    return (
        <ErrorAlert 
            message={combinedMessage} 
            onClose={() => setShowError(false)} 
        />
    );
};

const phoneRegex = /^\+?[1-9]\d{1,14}$/;

const validationSchema = Yup.object({
    firstName: 
        Yup.string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .max(20, "First name must be at most 20 characters")
        .required("First name is required"),

    lastName: 
        Yup.string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .max(20, "Last name must be at most 20 characters")
        .required("Last name is required"),

    email: 
        Yup.string()
        .trim()
        .email("Invalid email format")
        .min(5, "Email must be at least 5 characters")
        .max(50, "Email must be at most 50 characters")
        .required("Email is required"),

    phone: 
        Yup.string()
        .trim()
        .min(10, "Phone must be at least 10 characters")
        .max(20, "Phone must be at most 20 characters")
        .matches(phoneRegex, "Invalid phone number")
        .required("Phone is required"),

    address: 
        Yup.string()
        .trim()
        .min(10, "Address must be at least 10 characters")
        .max(100, "Address must be at most 100 characters")
        .required("Address is required")
});

const FormSection = () => {
    const navigate = useNavigate();

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    };

    const handleGoBack = () => navigate('/cart');

    const handleSubmit = (values, { setSubmitting}) => {
        console.log('Form submitted with values:', values);

        navigate('/success');
        setSubmitting(false);
    };

    return (
        <CheckoutContainer>
            <CheckoutTitle>Checkout</CheckoutTitle>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form>
                        <FormSectionWrapper>
                            <FormRow>
                                <FormField>
                                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                                    <Field as={FormInput} type="text" id="firstName" name="firstName" />
                                </FormField>

                                <FormField>
                                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                                    <Field as={FormInput} type="text" id="lastName" name="lastName" />
                                </FormField>
                            </FormRow>

                            <FormRow>
                                <FormField>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Field as={FormInput} type="email" id="email" name="email" />
                                </FormField>

                                <FormField>
                                    <FormLabel htmlFor="phone">Phone</FormLabel>
                                    <Field as={FormInput} type="tel" id="phone" name="phone" />
                                </FormField>
                            </FormRow>

                            <FormField>
                                <FormLabel htmlFor="address">Address</FormLabel>
                                <Field as={FormInput} type="text" id="address" name="address" />
                            </FormField>

                            <FormErrorAlert>
                                <AllFormErrors errors={errors} touched={touched}/>
                            </FormErrorAlert>

                            <ButtonsContainer>
                                <GoBackButton type="button" onClick={handleGoBack}>Go Back</GoBackButton>
                                <ContinueButton type="submit" disabled={isSubmitting}>Continue</ContinueButton>
                            </ButtonsContainer>

                        </FormSectionWrapper>
                    </Form>
                )}
            </Formik>
        </CheckoutContainer>
    );
};

export default FormSection;
