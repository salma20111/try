import Link from "next/link";

import classes from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={classes["not-found"]}>
      <h3>404</h3>
      <p>Page not found!</p>
      <Link href="/">Back to home page</Link>
    </div>
  );
}
