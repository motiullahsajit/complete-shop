import React, { useContext, useState } from "react";
import {
  createUser,
  handleGoogleSignIn,
  initialiizeApp,
  signIn,
} from "./Firebase/firebase.auth";
import { UserContext } from "../../App";
import { useForm } from "react-hook-form";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "./Firebase/firebase.auth";
import { useHistory, useLocation } from "react-router";
import "./Login.css";

initialiizeApp();
const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [createAccount, setCreateAccount] = useState(false);
  const [errorMessage, setErrorMessge] = useState("");
  const history = useHistory();
  const googleProvider = GoogleAuthProvider;
  const fbProvider = FacebookAuthProvider;
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  // google signIn
  const googleSignIn = () => {
    handleGoogleSignIn(googleProvider).then((result) => {
      if (result.message) {
        setErrorMessge(result.message);
      }
      if (result.email) {
        const userInfo = {
          name: result.displayName,
          email: result.email,
          isSignin: true,
        };
        setLoggedInUser(userInfo);
        setErrorMessge("");
        history.replace(from);
      }
    });
  };
  // facebook signIn
  const fbSignIn = () => {
    handleGoogleSignIn(fbProvider).then((result) => {
      console.log(result);
      if (result.message) {
        setErrorMessge(result.message);
      }
      if (result.email) {
        const userInfo = {
          name: result.displayName,
          email: result.email,
          isSignin: true,
        };
        setLoggedInUser(userInfo);
        setErrorMessge("");
        history.replace(from);
      }
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // submiited data on form and create or lgoin in user.
  const onSubmit = (data) => {
    console.log(data);
    !createAccount
      ? userLogin(data.email, data.password)
      : newUser(data.name, data.email, data.password);
  };

  // login user with email and password
  const userLogin = (email, password) => {
    signIn(email, password).then((result) => {
      if (result.message) {
        setErrorMessge(result.message);
      }

      if (result.email) {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.name = result.displayName;
        newUserInfo.email = result.email;
        setLoggedInUser(newUserInfo);
        setErrorMessge("");
        history.replace(from);
      }

      console.log(result, "user login successfull");
    });
  };
  // create account  with name, email and password
  const newUser = (name, email, password) => {
    createUser(name, email, password).then((result) => {
      console.log(result, "create account successfull");
      if (result.message) {
        setErrorMessge(result.message);
      }
      if (result.email) {
        console.log(result.displayName, result.email);
        const newUserInfo = { ...loggedInUser };
        newUserInfo.name = result.displayName;
        newUserInfo.email = result.email;
        setLoggedInUser(newUserInfo);
        setErrorMessge("");
        history.replace(from);
      }
    });
  };

  console.log(loggedInUser);

  return (
    <section id="loginPart">
      <div className="container">
        <div className="row justify-content-center align-content-center">
          {/* <div className="col-lg-2">
          <img className="img-fluid" src={loginImage} alt="loginImage" />
        </div> */}
          <div className="col-lg-4">
            <h3>
              Wellcome To <span>Conflict Kitchen</span>
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {createAccount ? (
                <div>
                  <input
                    {...register("name", { required: false })}
                    placeholder="Your Name"
                    className="form-control input-design my-2"
                  />
                  {errors.name && <span>Your Name is required</span>}
                </div>
              ) : (
                ""
              )}
              <div>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="form-control input-design my-2"
                />
                {errors.email && <span>Your Email is required</span>}
              </div>
              <div>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="form-control input-design my-2"
                />
                {errors.password && <span>Your password is required</span>}
              </div>

              <button
                className="my-2 d-block w-100 py-2 btn btn-success"
                type="submit"
              >
                {createAccount ? "Sign Up" : "Sign In"}
              </button>
              <h6 className="text-danger errorMessage">{errorMessage}</h6>

              <h6
                className="text-primary d-inline-block toggleAccount"
                onClick={() => setCreateAccount(!createAccount)}
              >
                {createAccount
                  ? "Already have an account"
                  : "Create An Account"}
              </h6>
            </form>

            {/* login with social media */}
            <div className="social-icon-login">
              <p className="position-relative text-center">
                Or Login with Social Profile
              </p>
              <button className="btn btn-success" onClick={googleSignIn}>
                Contnue with google
              </button>
              <button className="btn btn-primary ms-1" onClick={fbSignIn}>
                Contnue with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
