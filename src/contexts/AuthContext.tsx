import { createContext, ReactNode } from "react";

interface UserProps{
    name: string;
    avatarUrl: string
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children } : AuthProviderProps){
    async function signIn() {
        console.log('logou!')
    }
    return(
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Juliano',
                avatarUrl: 'https://avatars.githubusercontent.com/u/46505899?v=4'
            }
        }}>
            { children }
        </AuthContext.Provider>
    )
}