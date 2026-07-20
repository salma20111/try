import classes from "./Input.module.css";

export default function Input({
  id,
  name,
  type,
  label,
  placeholder,
  inputState,
  errorText,
  onChange,
  onBlur,
  minLength,
}) {
  const { value, isValid, touched } = inputState;

  return (
    <div className={classes["form-input"]}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
           minLength={minLength}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          minLength={minLength}
        />
      )}
      <p className={classes["error"]}>{!isValid && touched ? errorText : ""}</p>
    </div>
  );
}