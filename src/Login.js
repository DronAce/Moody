import React from 'react'
import { Button } from "@material-ui/core";
import "./Login.css"
import { auth, provider } from './firebase';
import {actionTypes} from './Reducer'
import { useStateValue } from './StateProvider';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((err) => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/90/22/c3/9022c3da331305796ded3dda4c619df0.png" 
                alt="Moody"
                />
                
                <div className="login__text">
                    <h1>Sign in to Moody</h1>
                </div>
                
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
