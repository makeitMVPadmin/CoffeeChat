import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.scss';
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import {
    collection, onSnapshot,
    deleteDoc, addDoc, doc, setDoc,
    updateDoc, getDoc,
} from "firebase/firestore";
import { app, db } from "../../App";



export const SignUp = () => {

    const Navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app)
    const userData = {
        firstName: firstName,
        lastName: LastName
    }



    const createNewUser = async (e) => {
        try {
            e.preventDefault()
            const resp = await createUserWithEmailAndPassword(auth, email, password);
            // Assuming you have a Firestore collection named "users"
            // await addDoc(collection(db, 'Users'), {
            // email: resp.user.email,
            // Add any other user information you want to store in Firestore

            //   });
            console.log(resp)
        }
        catch (error) {
            console.log('error', error)
        }
    }




    return (
        <form
            className="createUserForm"
            onSubmit={createNewUser}>

            <h2 style={{ textAlign: 'center' }}>
                Create Account
            </h2>

            <input
                className="inputStyle"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder='First Name'
                type="text">
            </input>


            <input
                className="inputStyle"
                onChange={(e) => setLastName(e.target.value)}
                value={LastName}
                placeholder='Last Name'
                type="text">
            </input>


            <input
                className="inputStyle"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='email@mail.com'
                type="email">
            </input>

            <input
                className="inputStyle"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder='Password'
                type="password">
            </input>

            <div className="buttonContainer">
                <button onClick={createNewUser} className="createAccoutnBtn">
                    Create Account
                </button>
            </div>

        </form>


    )
}