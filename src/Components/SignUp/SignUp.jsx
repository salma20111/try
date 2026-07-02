"use client";

import { isEmail, isPast, minLength } from "@/helpers/validators";
import { useState } from "react";

const formValidators = {name:minLength, email: isEmail ,birthdate:isPast} 

const SignUp = () => {
 
const [formState, setFormState] = useState({
  name: {value: "", isValid: false, touched: false},
  email: {value: "", isValid: false, touched: false},
//   password: {value: "", isValid: false, touched: false},
//   confPassword: {value: "", isValid: false, touched: false},
  birthdate: {value: "", isValid: false, touched: false},
});





const handleInputChange = (e) => {
  const { value, name } = e.target;
  console.log(value)
  setFormState((prev) => ({
    ...prev,
    [name]: {...prev[name], value: value, isvalid: formValidators[name][value,3],
    },
  }))
}

const handelInputTouch = (e) => {
    const { name } = e.target;
    setFormState((prev) => ({
        ...prev,
        [name]: {...prev[name], touched: true},
    }))}
//  IMP    varisble as key => [key]
  

    const [password, setPassword] = useState({
    value: "",
    isValid: false,
    touched: false,
  });

  const [confPassword, setConfPassword] = useState({
    value: "",
    isValid: false,
    touched: false,
  });


//    const [birthdate, setBirthdate] = useState({
//     value: "",
//     isValid: false,
//     touched: false,
//   });




   const handlePasswordChange = (e) => {
    setPassword((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value.trim().length >= 7, 
    }));
  };

   const handleConfPassChange = (e) => {
    setConfPassword((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value === password.value , 
    }));
  };


     const  handleBirthdateChange = (e) => {
    const today = new Date().toISOString().split("T")[0]; 
    setBirthdate((prev) => ({
      ...prev,
      value: e.target.value,
      isValid: e.target.value !== today, 
    }));
  };


  const handlePassTouched = () => {
    setPassword((prev) => ({ ...prev, touched: true }));
  };

  const handleConfPassTouched = () => {
    setConfPassword((prev) => ({ ...prev, touched: true }));
  };

    const handleBirthdateTouched = () => {
    setBirthdate((prev) => ({ ...prev, touched: true }));
  };

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
          onBlur={handelInputTouch}
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
          onBlur={handelInputTouch}
        />
        <p>
          {!formState.email.isValid && formState.email.touched
            ? "Please provide a valid email"
            : ""}
        </p>
      </div>

      
      <div>
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="password"
          name="pass"
          placeholder="Write your password correctly"
          value={password.value}
          onChange={handlePasswordChange}
          onBlur={handlePassTouched}
        />
        <p>{!password.isValid && password.touched ? "Password should be at least 6 chars" : ""}</p>
      </div>

       <div>
        <label htmlFor="confPass">Confirm Password</label>
        <input
          type="password"
          id="confpassword"
          name="confPassword"
          placeholder="Write your password confirm"
          value={confPassword.value}
          onChange={handleConfPassTouched}
          onBlur={handleConfPassTouched}
          
        />
        <p>{!confPassword.isValid && confPassword.touched ? "Passwords must match" : ""}</p>
      </div>

      <div>
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={formState.birthdate.value}
          onChange={handleInputChange}
          onBlur={handelInputTouch}
        />
        <p>{!formState.birthdate.isValid && formState.birthdate.touched ? "Birthdate cannot be today" : ""}</p>
      </div>
    </form>
  );
};

export default SignUp;
