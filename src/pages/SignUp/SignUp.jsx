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
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const userData = {
    firstName: firstName,
    lastName: LastName,
  };

  const createNewUser = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      console.log("User object:", user);
      await updateUserInFirestore(user, { email, displayName }).then(() => {
        Navigate("/home");
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <section className="signup">
      <div className="centerForm">
        <img className="logoMark" src={FinalLogo}></img>
        <h2 className="signupTitle">CoffeeChat</h2>
        <h2 className="signUpHeader">Create Account</h2>

        <form className="createUserForm" onSubmit={createNewUser}>
          {/* <input
                className="inputStyle"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder='First Name'
                type="text">
            </input> */}

          <input
            className="inputStyle"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            placeholder="UserName"
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
