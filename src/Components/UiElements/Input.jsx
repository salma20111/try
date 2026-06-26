import classes from "./Input.module.css";

export default function Input({
  id,
  type,
  label,
  placeholder,
  value,
  error,
  errorText,
  onChange,
}) {
  return (
    <div className={classes["form-input"]}>
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      )}
      <p className={classes["error"]}>{error ? errorText : ""}</p>
    </div>
  );
}
