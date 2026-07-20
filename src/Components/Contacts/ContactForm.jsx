"use client";

import Button from "../UiElements/Button";
import { isEmail, minLength } from "@/helpers/validators";
import Input from "../UiElements/Input";
import useForm from "@/hooks/useForm";

import classes from "./ContactForm.module.css";

const formValidators = { name: minLength, email: isEmail, subject: minLength };

const initialState = {
  name: { value: "", isValid: false, touched: false },
  email: { value: "", isValid: false, touched: false },
  subject: { value: "", isValid: false, touched: false },
};

export default function ContactForm() {
  const { formState, handleChange, handleTouch, formIsValid } = useForm({
    initialState,
    formValidators,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent");
  };

  return (
    <form onSubmit={handleSubmit} className={classes["contact-form"]}>
      <h3>Contact Us</h3>

      <Input
        id="name"
        name="name"
        type="text"
        label="Name"
        placeholder="Write a valid name!"
        inputState={formState.name}
        errorText="Please provide a valid name!"
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={3}
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="Write a valid email"
        inputState={formState.email}
        errorText="Please provide a valid email!"
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Input
        id="subject"
        name="subject"
        type="textarea"
        label="Subject"
        placeholder="Write the subject in details"
        inputState={formState.subject}
        errorText="Subject should be at least 5 chars!"
        onChange={handleChange}
        onBlur={handleTouch}
        minLength={5}
      />

      <Button disabled={!formIsValid} className={classes["btn"]}>
        Send
      </Button>
    </form>
  );
}