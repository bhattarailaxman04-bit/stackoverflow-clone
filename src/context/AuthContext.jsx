import { useContext, useState, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [isLoggedIn, setISLoggedIn] = useState(false);

    const login = () => setISLoggedIn(true);
    const logout = () => setISLoggedIn(false);

    return <AuthContext.Provider value={{isLoggedIn,login,logout}}>{children}</AuthContext.Provider>
}
export function useAuth(){
    return useContext(AuthContext);
}    