import { useState } from "react";

import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {

    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

        setError(null)
        setPending(true)
        
        try {
            const res = await signInWithEmailAndPassword(auth, email, password)

            dispatch({type: "LOGIN", payload: res.user})

            setPending(false)
            setError(null)
        } catch (error) {
            console.log("error", error);
            setError(error.message);
            setPending(false)
        }

    }

    return { login, error, pending }

}
