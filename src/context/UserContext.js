" use client";

import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const {user, setUser} = useState("");
}