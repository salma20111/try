"use client";

import { isEmail, isPast, minLength } from "@/helpers/validators";
import { useState } from "react";

const formValidators = { name: minLength, email: isEmail, birthdate: isPast };

const SignUp = () => {
  // name email birthdate password passwordConfirm
  const [formState, setFormState] = useState({
    name: { value: "", isValid: false, touched: false },
    email: { value: "", isValid: false, touched: false },
    birthdate: { value: "", isValid: false, touched: false },
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid: formValidators[name](value, 3),
      },
    }));
  };

  const handleInputTouch = (e) => {
    const { name } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: { ...prev[name], touched: true },
    }));
  };

  // console.log(formState);

  return (
    <form>
      <h3>Create New Account</h3>
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Write your full name"
          value={formState.name.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.name.isValid && formState.name.touched
            ? "Name should be at least 3 chars"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
          value={formState.email.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.email.isValid && formState.email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>

      <div>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formState.birthdate.value}
          onChange={handleInputChange}
          onBlur={handleInputTouch}
        />
        <p>
          {!formState.birthdate.isValid && formState.birthdate.touched
            ? "Please provide a valid birthdate"
            : ""}
        </p>
      </div>
    </form>
  );
};

export default SignUp;
