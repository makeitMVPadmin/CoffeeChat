import './LoginPage.scss';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, } from "firebase/auth";
import { collection } from 'firebase/firestore';
import { db, app } from '../../App';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {


  const auth = getAuth(app);
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const provider = new GoogleAuthProvider();



  useEffect(()=>{
    const checkUserAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          Navigate('/')
        }
      });
    };

    checkUserAuth();
  },[])



  // const handleGoogleSignIn = () => {


  //   signInWithPopup(auth, provider)
  //     .then((userCredential) => {
  //       // User signed in with Google. You can handle the user data here.
  //     })
  //     .catch((error) => {
  //       // Handle sign-in errors here.
  //     });
  // };

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log('signedIn', cred.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  }


  return (
    <div class="center-vertically">
      <h2>Welcome to CoffeeChat</h2>
      <form onSubmit={signIn}>
        <label>
          Email:
          <br />
          <input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          <input type='checkbox' /> Remember me?
        </label>
        <br />
        <br />
        <button type='submit' onClick={signIn}>Login</button>
        <br />
        <br />
        <a class="center-vertically" href='needToFill'>Forgot Password?</a>
        <br />
        <div class="center-vertically">Or continue with</div>
        <div class="two-column">
          <button class="narrow-button" type="button" >
            Google
          </button>
          <button class="narrow-button" type="button">
            LinkedIn
          </button>
        </div>
        <br />
        <div class="center-vertically">
          <a href='signup'>Don't have an account?</a>
          <a href='/signup'>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
