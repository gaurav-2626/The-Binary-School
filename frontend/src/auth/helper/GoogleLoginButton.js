import React from "react";
import GoogleLogin from "react-google-login";

// components
import { ReactComponent as GoogleIcon } from "../../uploads/google.svg";

// helper
import { authenticate, googleLoginAPICall } from "./index.js";

const GoogleLoginButton = ({ reload = undefined, setReload = (f) => f }) => {
  const googleLoginSuccess = (res) => {
    // check if res contains error
    googleLoginAPICall(res.accessToken, res.profileObj.googleId)
      .then((response) => {
        // authenticate
        const user = {
          token: response.jwt_token,
          profile: {
            id: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            image_url: res.profileObj.imageUrl,
          },
        };
        authenticate(user, () => {
          // check if refresh is required or not?
          // force reload
          setReload(!reload);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleLoginFailure = (err) => {
    console.log(err);
  };
  return (
    <div>
      <GoogleLogin
        clientId="827996575367-cksgop3u92u4nnh8qrete0mob0hcunea.apps.googleusercontent.com"
        render={(renderProps) => {
          return (
            <button
              className="btn"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <GoogleIcon className="google-icon" />
              Sign In using Google
            </button>
          );
        }}
        onSuccess={googleLoginSuccess}
        onFailure={googleLoginFailure}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default GoogleLoginButton;