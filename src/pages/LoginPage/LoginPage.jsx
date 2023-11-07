import './LoginPage.scss';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken, } from "firebase/auth";
import { db, app } from '../../App';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {


  const auth = getAuth(app);
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const provider = new GoogleAuthProvider();



  useEffect(() => {
    const checkUserAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user != null) {
          Navigate('/')
        }
      });
    };

    checkUserAuth();
  }, [])



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
      <div></div>
      <h2 className='loginH2'>Welcome Back!</h2>

      <form className='loginForm' onSubmit={signIn}>

        <input
          className='inputLogin'
          type='email'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className='inputLogin'
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='checkBoxLoginDiv'>
          <input className='checkBoxLogin' type='checkbox' />
          <p>Remember me?</p>
        </div>

      </form>

      <button 
      className='loginBtn'
      type='submit' 
      onClick={signIn}>
        Login
      </button>

      <a className="center-vertically" href='needToFill'>Forgot Password?</a>

      <div className="continueWith"><p>Or continue with</p></div>

      <div className="altBtns">
        <div className='border'>
          <button className='loginBtn' type="button" >
          Google
        </button>
        </div>
        <div className='border'>
        <button className="loginBtn" type="button">
          LinkedIn
        </button>
        </div>
      </div>

      
        <p className='continueWith'>Don't have an account?</p>
        <a href='/signup'>Sign Up</a>

    </div>
  );
};

export default LoginPage;
