"use client";

import { useState } from "react";

import Button from "../UiElements/Button";
import { isEmail, isEmpty, minLength } from "@/helpers/validators";
import Input from "../UiElements/Input";

import classes from "./ContactForm.module.css";

/*
  - name
  - email
  - password
  - password confirm
  - birthdate

  - Sign up button
*/

export default function ContactForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // send to an api
    console.log(name, email, subject);
    if (isEmpty(name) || !isEmail(email) || !minLength(subject)) {
      if (isEmpty(name)) {
        setNameError(true);
      }

      if (!isEmail(email)) {
        setEmailError(true);
      }

      if (!minLength(subject)) {
        setSubjectError(true);
      }

      return;
    }

    setName("");
    setEmail("");
    setSubject("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes["contact-form"]}>
      <h3>Contact Us</h3>

      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Write a valid name!"
        value={name}
        error={nameError}
        errorText="Please provide a valid name!"
        onChange={(e) => {
          const { value } = e.target;
          setName(value);
          if (!isEmpty(value)) setNameError(false);
        }}
      />

      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Write a valid email"
        value={email}
        error={emailError}
        errorText="Please provide a valid email!"
        onChange={(e) => {
          const { value } = e.target;
          setEmail(value);
          if (isEmail(value)) setEmailError(false);
        }}
      />

      <Input
        id="subject"
        type="textarea"
        label="Subject"
        placeholder="Write the subject in details"
        value={subject}
        error={subjectError}
        errorText="Subject should be at least 5 chars!"
        onChange={(e) => {
          const { value } = e.target;
          setSubject(value);
          if (minLength(value)) setSubjectError(false);
        }}
      />

      <Button className={classes["btn"]}>Send</Button>
    </form>
  );
}
