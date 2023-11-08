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



  const handleGoogleSignIn = () => {


    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // User signed in with Google. You can handle the user data here.
      })
      .catch((error) => {
        // Handle sign-in errors here.
      });
  };

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

    const handleLinkedInSignIn = () => {
      // Define your LinkedIn OAuth 2.0 parameters
      const linkedInClientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
      const linkedInRedirectUri = process.env.REACT_APP_LINKEDIN_REDIRECT_URI;
  
      // Redirect to LinkedIn for authorization
      const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedInClientId}&redirect_uri=${linkedInRedirectUri}&state=STATE&scope=r_liteprofile r_emailaddress`;
  
      // Redirect the user to the LinkedIn authorization URL
      window.location.href = authorizationUrl;
    };
  
  
    return (
      <div className="center-vertically">
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
          <a className="center-vertically" href='needToFill'>Forgot Password?</a>
          <br />
          <div className="center-vertically">Or continue with</div>
          <div className="two-column">
            <button className="narrow-button" type="button" onClick={handleGoogleSignIn}>
              Google
            </button>
            <button className="narrow-button" type="button" onClick={handleLinkedInSignIn}>
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
  }
};

export default LoginPage;
