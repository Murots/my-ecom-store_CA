import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./ContactPage.styles";

/**
 * A React component that renders a contact form with validation using react-hook-form and Yup.
 * It provides fields for entering full name, subject, email, and a message body. Form fields have validation rules enforced via Yup.
 * Upon successful submission, the form data is logged to the console and the form is reset.
 *
 * @module ContactPage
 *
 * @returns {React.Component} The ContactPage component renders a contact form with inputs for user data and validation handling.
 */
const contactSchema = yup
  .object({
    fullName: yup.string().required("Full name is required").min(3, "Full name must be at least 3 characters"),
    subject: yup.string().required("Subject is required").min(3, "Subject must be at least 3 characters"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    body: yup.string().required("Message text is required").min(3, "Message text must be at least 3 characters"),
  })
  .required();

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <S.PageContainer>
      <S.FormTitle>Contact Us</S.FormTitle>
      <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <S.Label>
          Full Name
          <S.Input {...register("fullName")} />
          <S.ErrorMessage>{errors.fullName?.message}</S.ErrorMessage>
        </S.Label>

        <S.Label>
          Subject
          <S.Input {...register("subject")} />
          <S.ErrorMessage>{errors.subject?.message}</S.ErrorMessage>
        </S.Label>

        <S.Label>
          Email
          <S.Input {...register("email")} type="email" />
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
        </S.Label>

        <S.Label>
          Message
          <S.TextArea {...register("body")} />
          <S.ErrorMessage>{errors.body?.message}</S.ErrorMessage>
        </S.Label>

        <S.SubmitButton type="submit">Submit</S.SubmitButton>
      </S.StyledForm>
    </S.PageContainer>
  );
};

export default ContactPage;
