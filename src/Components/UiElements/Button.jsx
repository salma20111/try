import Link from "next/link";
import classes from "./Button.module.css";

export default function Button({
  children,
  onClick,
  danger,
  outline,
  href,
  className,
  disabled,
}) {
  const classN = `${classes["button"]} ${danger ? classes["danger"] : ""} ${outline ? classes["outline"] : ""} ${className}`;

  if (href)
    return (
      <Link href={href} className={classN}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={classN} disabled={disabled}>
      {children}
    </button>
  );
}
