import React, { useState } from "react";
import { Field, Formik, ErrorMessage } from "formik";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import * as Yup from "yup";
import "../../css/loginpage.css";
import { useAuth } from "../../components/Auth/use-auth";

export default function LoginPage() {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const prevPage = location.state;
  const facebookBackground =
    "linear-gradient(to right,#0546A0 0%, #663FB6 100%)";

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const handleSubmit = (values) => {
    setIsLoading(true);
    auth.signin(values.email, values.password, setIsLoading);
  };

  return (
    <div className="form-container">
      <div className="login-title">Welcome!</div>
      <div className={loading && "loader-container"} />
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form className="loginForm" onSubmit={handleSubmit}>
            <label className="label">Email:</label>

            <Field
              type={"email"}
              placeholder={"Please input Email"}
              id="email"
              name="email"
            />
            <ErrorMessage
              component="div"
              name="email"
              className="invalid-feedback"
            />
            <label className="label">Password:</label>

            <Field
              type={"password"}
              placeholder={"Please input Password"}
              id={"password"}
              name={"password"}
            />
            <ErrorMessage
              component="div"
              name="password"
              className="invalid-feedback"
            />
            <button
              type="submit"
              className="login-button"
              disabled={isSubmitting}
            >
              Login
            </button>
            <Link to={"../SchoolProfile/signup"} className="sign-up">
              Don't have an account? Sign up
            </Link>
            <p className="alternative-sign-in">or login with</p>
            <div className="horizontalrule" />
            <div className="bottom">
              <div className="social-links">
                <a href="" style={{ background: facebookBackground }}>
                  <FaFacebookF color="white" />
                </a>
                <a href="" style={{ background: "white" }}>
                  <FaGoogle style={{ fill: "url(#blue-gradient)" }} />
                </a>
                <a href="" style={{ background: "black" }}>
                  <FaApple color="white" />
                </a>
              </div>
            </div>
          </form>
        )}
      </Formik>
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#4285F4" offset="0%" />
          <stop stopColor="#34A853" offset="33%" />
          <stop stopColor="#FBBC05" offset="67%" />
          <stop stopColor="#EA4335" offset="100%" />
        </linearGradient>
      </svg>
    </div>
  );
}
