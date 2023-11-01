import './LoginPage.scss';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const LoginPage = () => {

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // User signed in with Google. You can handle the user data here.
      })
      .catch((error) => {
        // Handle sign-in errors here.
      });
  };

  const handleLinkedInSignIn = () => {
    // Define your LinkedIn OAuth 2.0 parameters
    const linkedInClientId = '869jbfzkg1ho3l'; // Replace with your actual LinkedIn Client ID
    const linkedInRedirectUri = 'coffee-chat-a47df.firebaseapp.com/linkedin-callback'; // Replace with your Firebase hosting URL
  
    // Step 1: Redirect to LinkedIn for authorization
    const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedInClientId}&redirect_uri=${linkedInRedirectUri}&state=STATE&scope=r_liteprofile r_emailaddress`;
  
    // Redirect the user to the LinkedIn authorization URL
    window.location.href = authorizationUrl;
  };
  
  
  return (
    <div className="center-vertically">
      <h2>Welcome to CoffeeChat</h2>
      <form >
        <label>
          Email:
          <br />
          <input type='email' placeholder='Enter your email' />
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input type='password' />
        </label>
        <br />
        <br />
        <label>
          <input type='checkbox' /> Remember me?
        </label>
        <br />
        <br />
        <button type='submit'>Login</button>
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
        <div className="center-vertically">
        <a href='needToFill'>Don't have an account?</a>
        <a href='needToFill'>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
