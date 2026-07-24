"use client";

import Input from "../UiElements/Input";
import Button from "../UiElements/Button";
import useForm from "@/hooks/useForm";
import { isEmail, minLength } from "@/helpers/validators";
import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./login.module.css";


const formValidators = {
  name: minLength,
  email: isEmail,
};

const  initialState = {
    name: { value: "", isValid: false, touched: false },
    email: { value: "", isValid: false, touched: false },
  }

export default function Login() {
      const {formState, handleChange, handleTouch, formIsValid} = useForm({initialState, formValidators})
    

       const handleSubmit = useCallback((e) => {
          e.preventDefault();
          console.log("salma")
        },[]);

        const handleSignUpPage = useCallback(() => {},[])
        return(
            <form className={classes["form"]} onSubmit={handleSubmit}>
                <h2  className={classes["title"]}>Log In</h2>
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
                              placeholder="Write an exist email"
                              errorText="Please provide a valid email"
                              inputState={formState.email}
                              onChange={handleChange}
                              onBlur={handleTouch}
                              />
                          <div className={classes["btn-section"]}>
                                 <Button className={classes["login-btn"]} disabled={!formIsValid} onClick={handleSubmit}>
                                   Login
                                  </Button>


                                       <Button className={classes["signup-btn"]} onClick={handleSubmit}>
                                          <Link href="/sign-up">Sign Up</Link>
                                        </Button>


                          </div>

                                        <button className={classes["google-btn"]} onClick={handleSubmit}>
                                            <Link href="https://www.google.com/search?q=google+logo+png&oq=google&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg8MhgIAhAuGEMYgwEYxwEYsQMY0QMYgAQYigUyBggDECMYJzIGCAQQRRg7MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDQ3M2owajeoAgiwAgHxBVWu7bTIsM_y8QVVru20yLDP8g&sourceid=chrome&ie=UTF-8"><Image
                                              src="/images/google4.jpg"
                                              alt="Background"
                                              width={20}
                                              height={20}
                                             /></Link>
                                  Contineo With Google
                                  </button>
            </form>
        )
}