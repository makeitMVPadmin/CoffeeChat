import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/logo.png'
import Logomark from '../../assets/images/Logomark.png'
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
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app)



    const createNewUser = (e) =>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((resp)=> {
            console.log(resp)
            //document id is their uid
             setDoc(doc(db, "user", resp.user.uid), {
                username: userName,
                email: email,
                connections: 0,
                Appointments: 0,
                Chats: 0,
                Location: '',
                Industry: '',
                Mentee: null,
                Mentor: null,
                // DateCreated:      
             })
        })
        .then(()=> {
            const checkUserAuth = () => {
                auth.onAuthStateChanged((user) => {
                  if (user != null) {
                    Navigate('/')
                  }
                });
              };
          
              checkUserAuth();
        })
        .catch((err)=>{
            console.log(err, 'error')
        })
        
    }



    return (

        <div className="centerForm">
            <img className='logoMark' src={logo}></img>

            <h2 className="signUpHeader">Create Account</h2>

            <form
                className="createUserForm"
                onSubmit={createNewUser}>

                {/* <input
                className="inputStyle"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder='First Name'
                type="text">
            </input> */}


                <input
                    className="inputStyle"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    placeholder='UserName'
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
                    placeholder='Create Password'
                    type="password">
                </input>

                <div className="buttonContainer">
                    <button onClick={createNewUser} className="createAccoutnBtn">
                        Sign Up
                    </button>
                </div>

            </form>
            <div className="greenBlob"></div>
            <div className="greenBlob2"></div>


        </div>


    )
}