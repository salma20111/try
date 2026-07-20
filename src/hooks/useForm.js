import { useCallback, useMemo, useState } from "react";

export default function useForm({initialState, formValidators}) {
     const [formState, setFormState] = useState(initialState);


       const handleChange = useCallback((e) => {
         const { value, name, minLength} = e.target;
     
         setFormState((prev) => ({
           ...prev,
           [name]: {
             ...prev[name],
             value,
             isValid: formValidators[name]({
               value,
               value2: prev.password?.value || "",
               min: minLength,
             }),
           },
         }));
       },[formValidators]);
     
       const handleTouch = useCallback((e) => {
         const { name } = e.target;
     
         setFormState((prev) => ({
           ...prev,
           [name]: { ...prev[name], touched: true },
         }));
       },[]);
     
       const formIsValid = useMemo(
         () => Object.keys(formState).every((el) => formState[el].isValid),
         [formState],
       );
       
       return {
  formState,
  handleChange,
  handleTouch,
  formIsValid,
};
}