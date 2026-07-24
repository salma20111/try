"use client";

import { isEmail, isPast, minLength, theSame } from "@/helpers/validators";
import { useCallback, useMemo, useState } from "react";
import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/hooks/useForm";
import classes from "./signUp.module.css";

const formValidators = {
  name: minLength,
  email: isEmail,
  birthdate: isPast,
  password: minLength,
  passwordConfirm: theSame,
};

const  initialState = {
    name: { value: "", isValid: false, touched: false },
    email: { value: "", isValid: false, touched: false },
    birthdate: { value: "", isValid: false, touched: false },
    password: { value: "", isValid: false, touched: false },
    passwordConfirm: { value: "", isValid: false, touched: false },
  }

const SignUp = () => {
  // name email birthdate password passwordConfirm
 
  const {formState, handleChange, handleTouch, formIsValid} = useForm({initialState, formValidators})


  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("salma")
  },[]);

  return (
    <form className={classes["form"]} onSubmit={handleSubmit}>
      <h2 className={classes["title"]}>Create New Account</h2>
      <Input
        id="name"
        type="text"
        name="name"
        label="Full Name"
        placeholder="Write your full name"
        errorText="Name should be at least 3 chars"
        inputState={formState.name}
        onChange={handleChange}
        onBlur={handleTouch}
         minLength={3}
      />

      <Input
        id="email"
        type="email"
        name="email"
        label="Your Email"
        placeholder="write an exist email"
        errorText="Please provide a valid email"
        inputState={formState.email}
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Input
        id="birthdate"
        type="date"
        name="birthdate"
        label="Birthdate"
        errorText="Please provide a valid birthdate"
        inputState={formState.birthdate}
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        errorText="Password should be at least 6 chars"
        placeholder="*********"
        inputState={formState.password}
        onChange={handleChange}
        minLength={6}
        onBlur={handleTouch}
      />

      <Input
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        label="Password Confirm"
        errorText="Passwords are not the same"
        placeholder="*********"
        inputState={formState.passwordConfirm}
        onChange={handleChange}
        onBlur={handleTouch}
      />

      <Button disabled={!formIsValid} onClick={handleSubmit}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;


// some  بتعدي علي واحد وتحد 
// every كلهم بس لازم كلهم يبقوا true 
// use memo is a reavt hook  بس لما ال form state تتغير 
//  IMP    varisble as key => [key]
// we cam go inside prev 
  