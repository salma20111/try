"use client";

import { MdOutlineLightMode } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

import classes from "./Navbar.module.css";
import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Button from "../UiElements/Button";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);
  const { theme , toggleTheme } = useTheme();
  const {user , setUser} = useUser();
  const router = useRouter();
  console.log(theme, toggleTheme);


  const toggleNavList = () => setShowNavList(!showNavList);
  const hideNavList = () => setShowNavList(false);

  function handleLogOut() {
    setUser(null);
    hideNavList();
    router.push('/login');

  }

  return (

    <nav className={classes["nav-bar"]}>
      <h1 onClick={hideNavList}>
        <Link href="/">Mo Blog</Link>
      </h1>

      <button onClick={toggleTheme} className={classes['themeBtn']}>{theme === 'light' ? <IoMoonOutline /> : <MdOutlineLightMode />}</button>

      <ul
        className={`${classes["nav-list"]} ${
          showNavList ? classes["show-nav-list"] : ""
        }`}
      >
        <NavLink href="/" text="Home" hideNavList={hideNavList} />
        <NavLink href="/blog" text="Blog" hideNavList={hideNavList} />
        <NavLink href="/about" text="About" hideNavList={hideNavList} />
        <NavLink href="/contacts" text="Contacts" hideNavList={hideNavList} />

        {user ? (<Button onClick={handleLogOut} outline>Log Out</Button>) : (<><NavLink href="/login" text="Login" hideNavList={hideNavList} />
        <NavLink href="/sign-up" text="SignUp" hideNavList={hideNavList} /> </>)}
        

        
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
