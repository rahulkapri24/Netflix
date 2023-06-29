//import '../Netflix-login-logo.png';
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
function LoginScreen() {
  const [sign, setSign] = useState(false);

  return (
    <div className="loginScreen">
      <Helmet>
        <title>NETFLIX  </title>
      </Helmet>
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://o.remove.bg/downloads/345d69ca-05b3-4c8b-8493-e408c6ae31ed/Netflix-login-logo-removebg-preview.png"
          alt=""
        />

        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {sign ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Email Address" />

                <button
                  onClick={() => setSign(true)}
                  className="loginScreen_getstarted"
                >
                  {" "}
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginScreen;
