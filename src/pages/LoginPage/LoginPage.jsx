import "./LoginPage.scss";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";
import { updateUserInFirestore } from "../../firebasestore";

import { db, app } from "../../App";
import { useEffect, useState } from "react";
import { json, useNavigate, Link } from "react-router-dom";
import FinalLogo from "../../assets/logo/Final_logo.svg";
import google from "../../assets/icons/links/google.svg";
import linkedin from "../../assets/icons/links/linkedin.svg";
import linkedintext from "../../assets/icons/links/linkedintext.png";
import googletext from "../../assets/icons/links/googletext.png";

const LoginPage = () => {
  const auth = getAuth(app);
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const checkUserAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user != null) {
          Navigate("/home");
        }
      });
    };

    checkUserAuth();
  }, []);

  const GoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Sign in with Google and get user credentials
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      // Extract additional information
      const { email, photoURL, displayName } = user;
      // Update or create user in Firestore with additional information
      await updateUserInFirestore(user, {
        email,
        photoURL,
        userName: displayName,
      }).then(() => {
        Navigate("/home");
      });
    } catch (error) {
      // Handle the error or display an error message to the user.
      console.error("Google sign-in error:", error);
    }
  };
  

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("signedIn", cred.user);
        Navigate("/home");
        const userData = cred.data
        sessionStorage.setItem('userData', JSON.stringify(userData))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section className="login">
      <div className="centerForm">
        <Link to={"/"}>
          {" "}
          <img className="logoMark" src={FinalLogo}></img>
        </Link>
        <h2 className="loginTitle">CoffeeChat</h2>
        <h2 className="loginH2">Welcome Back!</h2>

        <form className="loginForm" onSubmit={signIn}>
          <input
            className="inputLogin"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="inputLogin"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="checkBoxLoginDiv">
            <input className="checkBoxLogin" type="checkbox" />
            <p>Remember me?</p>
          </div>
        </form>

        <button className="loginBtn" type="submit" onClick={signIn}>
          Login
        </button>

        {/* <a href="#">Forgot Password?</a> */}

        <div className="continueWith">
          <p>Or continue with</p>
        </div>

        <div className="altBtns">
          <div className="border">
            <button className="loginBtn" type="button" onClick={GoogleSignIn}>
              <img src={google} className="linkSvg" />
              <img src={googletext} className="linkText" />
            </button>
          </div>
        </div>

        <p className="continueWith">Don't have an account?</p>
        <a href="/signup">Sign Up</a>

        <div className="backgroundLogin"></div>
        <div className="backgroundLogin2"></div>
      </div>
    </section>
  );
};

export default LoginPage;
