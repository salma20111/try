"use client";

import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const savedUser = localStorage.getItem("user");
  
      if (savedUser) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setUser(JSON.parse(savedUser));
      }
    }, [])

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>

}
// initial state of 
export function useUser (){
    return useContext(UserContext);
}