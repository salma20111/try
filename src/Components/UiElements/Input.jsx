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
        />
      )}
      <p className={classes["error"]}>{!isValid && touched ? errorText : ""}</p>
    </div>
  );
}