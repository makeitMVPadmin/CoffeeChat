import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FinalLogo from "../../assets/logo/Final_logo.svg";
import "./SignUp.scss";
import { updateUserInFirestore } from "../../firebasestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
import {
  collection,
  onSnapshot,
  deleteDoc,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { app, db } from "../../App";

export const SignUp = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  



  const createNewUser = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((resp)=> {
        console.log(resp)
        //document id is their uid
         setDoc(doc(db, "user", resp.user.uid), {
            FullName: name,
            Email: email,
            City:'',
            State:'',
            PhoneNumber:'',
            Field:'',
            Bio:'',
            ProfileImg:'',
            Connections: 0,
            Appointments: 0,
            Chats: 0,
            Location: '',
            PhoneNumber:'',
            Field:'',
            Mentee: null,
            Mentor: null,
         })
    })
    .then(()=> {
        const checkUserAuth = () => {
            auth.onAuthStateChanged((user) => {
              if (user != null) {
                Navigate('/editProfile')
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
    <section className="signup">
      <div className="centerForm">
        <Link to={"/"}>
          {" "}
          <img className="logoMark" src={FinalLogo}></img>
        </Link>
        <h2 className="signupTitle">CoffeeChat</h2>
        <h2 className="signUpHeader">Create Account</h2>

        <form className="createUserForm" onSubmit={createNewUser}>

          <input
            className="inputStyle"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Full Name"
            type="text"
          ></input>

          <input
            className="inputStyle"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            type="email"
          ></input>

          <input
            className="inputStyle"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Create Password"
            type="password"
          ></input>

          <div className="buttonContainer">
            <button onClick={createNewUser} className="createAccoutnBtn">
              Sign Up
            </button>
          </div>
        </form>
        <p className="signup__tologin">Don't have an account?</p>
        <Link className="signup__tologin" to={"/login"}>
          Log in
        </Link>
        <div className="backgroundSignup"></div>
      </div>
    </section>
  );
};
