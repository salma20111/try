import Image from "next/image";

import classes from "./Welcome.module.css";
import Button from "../UiElements/Button";

export default function Welcome() {
  return (
    <section className={classes["welcome"]}>
      <div className={classes["text"]}>
        <p className={classes["welcome-text"]}>welcome</p>
        <p className={classes["vision"]}>Learning Web</p>
        <p className={classes["vision"]}>Programming Today</p>
        <p className={classes["desc"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <div className={classes["buttons"]}>
          <Button href="/blog" className={classes["blog-btn"]}>
            Blog
          </Button>
          <Button outline href="/courses">
            Courses
          </Button>
        </div>
      </div>

      <div className={classes["img"]}>
        <Image
          src="/assets/mohamed_ramadan.png"
          alt="Mohamed Ramadan"
          width={600}
          height={400}
          loading="eager"
        />
      </div>
    </section>
  );
}
