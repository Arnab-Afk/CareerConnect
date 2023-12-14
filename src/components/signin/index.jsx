import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import img from "../../assets/images/review/google.png";
import img2 from "../../assets/images/review/tweet.png";
import { auth, googleAuthProvider } from '../../firebase';
import firebase from "../../firebase" ;
import {  signInWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth';


function SignIn() {
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      // Sign in with Google using the popup method
      const user = await signInWithPopup(auth, googleAuthProvider);
      console.log(user);
    } catch (error) {
      console.error('Google sign-in error:', error.message);
    }
  };
  const [email, setEmail] = useState("tony@example.com");
  const [password, setPassword] = useState("yourPassword");
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // await firebase.signIn(email, password);
      //<Link to="/">
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      //</Link>
      navigate("/")
      // User signed in successfully
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Handle error (e.g., display an error message to the user)
    }
    // try {
    //   // Sign in with Google using the popup method
    //   await auth.signInWithPopup(googleAuthProvider);
    // } catch (error) {
    //   console.error('Google sign-in error:', error.message);
    // }
  };
  return (
    
    <section className="account-section">
      <div className="tf-container">
        <div className="row">
          <div className="wd-form-login">
            <h4>Log In</h4>
            <div className="nofi-form">
              <p>
                Username: <span>candidate</span> or <span>employer</span>
              </p>
              <p>
                Password: <span>CareerConnect</span>
              </p>
            </div>
            <form action="/" onSubmit={handleSignIn}>
              <div className="ip">
                <label>
                  Username or email address<span>*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="ip">
                <label>
                  Password<span>*</span>
                </label>
                <div className="inputs-group auth-pass-inputgroup">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input-form password-input"
                    placeholder="Password"
                    id="password-input"
                    required
                  />
                  <Link
                    className={`password-addon ${
                      showPass ? "icon-eye" : "icon-eye-off"
                    }`}
                    id="password-addon"
                    onClick={() => setShowPass(!showPass)}
                  ></Link>
                </div>
              </div>
              <div className="group-ant-choice">
                <div className="sub-ip">
                  <input type="checkbox" />
                  Remember me
                </div>
                <Link to="#" className="forgot">
                  Fogot password?
                </Link>
              </div>
              <p className="line-ip">
                <span>or sign up with</span>
              </p>
              <Link to="#" className="btn-social">
                Continue with Facebook
              </Link>
              <Link to="/" className="btn-social" onClick={handleGoogleSignIn}>
                <img src={img} alt="images" /> Continue with Google
              </Link>
              <Link to="#" className="btn-social">
                <img src={img2} alt="images" /> Continue with Twitter
              </Link>
              <button type="submit">Login</button>
              <div className="sign-up">
                Not registered yet? <Link to="/createaccount">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
