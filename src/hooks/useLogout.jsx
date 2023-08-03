import { useState } from "react";

import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {

    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);

    const { dispatch } = useAuthContext();

    const logout = async () => {

        setError(null)
        setPending(true)
        
        try {
            await signOut(auth);
            dispatch({type: 'LOGOUT'})
            setPending(false)
            setError(null)
        } catch (error) {
            console.log("error", error);
            setError(error.message);
            setPending(false)
        }

    }

    return{ logout, error, pending }

}
