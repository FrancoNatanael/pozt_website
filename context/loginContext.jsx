'use client'
import { useContext,createContext,useState } from "react"

const UserContext = createContext(null);

export function LoginProvider({children}) {
    const [login, setLogin] = useState({user: null})

    return (
        <UserContext.Provider value={[login, setLogin]}>
            {children}
        </UserContext.Provider>
    )
} 

export const useLogin = () => useContext(UserContext)