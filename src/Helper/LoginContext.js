import {createContext, useState, useContext, useEffect} from 'react'
import app from '../module/Firebase';


export const LoginContext = createContext({});

function LoginContextComponent(props) {
    const [user, setUser] = useState(null);

    useEffect( () => {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                setUser(user);
                // User is signed in.
            } else {
                setUser(null)
            }
        });

    }, [])




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