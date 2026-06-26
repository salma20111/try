"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

import classes from "./Navbar.module.css";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);
  const hideNavList = () => setShowNavList(false);

  return (
    <nav className={classes["nav-bar"]}>
      <h1 onClick={hideNavList}>
        <Link href="/">Mo Blog</Link>
      </h1>

      <ul
        className={`${classes["nav-list"]} ${
          showNavList ? classes["show-nav-list"] : ""
        }`}
      >
        <NavLink href="/" text="Home" hideNavList={hideNavList} />
        <NavLink href="/blog" text="Blog" hideNavList={hideNavList} />
        <NavLink href="/about" text="About" hideNavList={hideNavList} />
        <NavLink href="/contacts" text="Contacts" hideNavList={hideNavList} />
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
