import {createContext, useState, useContext} from 'react'
import app from '../module/Firebase';


export const LoginContext = createContext({});

function LoginContextComponent(props) {
    console.log(props)
    const [user, setUser] = useState(null);


    return (
        <LoginContext.Provider value={
            {
                user: user, setUser: setUser
            }
        }>
            {props.children}
        </LoginContext.Provider>
    )


}

export function useAuth() {

    return useContext(LoginContext)
}
export default LoginContextComponent;