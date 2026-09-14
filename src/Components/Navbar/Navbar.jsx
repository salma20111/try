"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

import classes from "./Navbar.module.css";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);
  const { theme , toggleTheme } = useTheme();
  console.log(theme, toggleTheme);


  const toggleNavList = () => setShowNavList(!showNavList);
  const hideNavList = () => setShowNavList(false);

  return (
    <nav className={classes["nav-bar"]}>
      <h1 onClick={hideNavList}>
        <Link href="/">Mo Blog</Link>
      </h1>

      <button onClick={toggleTheme} className={classes['themeBtn']}>{theme === 'light' ? "Dark" : 'Light'}</button>

      <ul
        className={`${classes["nav-list"]} ${
          showNavList ? classes["show-nav-list"] : ""
        }`}
      >
        <NavLink href="/" text="Home" hideNavList={hideNavList} />
        <NavLink href="/blog" text="Blog" hideNavList={hideNavList} />
        <NavLink href="/about" text="About" hideNavList={hideNavList} />
        <NavLink href="/contacts" text="Contacts" hideNavList={hideNavList} />
        <NavLink href="/login" text="Login" hideNavList={hideNavList} />

        
      </ul>

      <button
        onClick={toggleNavList}
        className={classes["menu-button"]}
        aria-label="menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
