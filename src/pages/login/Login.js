// import "./login.css";
// function Login() {
//   return (
//     <div className="parent-log">
//       <div className="container login px-4 px-md-5">
//         <form className="my-4 w-100 m-auto">
//           <p className="heading">Sign in</p>
//           <div className="box">
//             <p>Email</p>
//             <div>
//               <input
//                 type="text"
//                 autocomplete="off"
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>
//           <div className="box">
//             <p>Password</p>
//             <div>
//               <input
//                 type="Password"
//                 autocomplete="off"
//                 placeholder="Enter your password"
//               />
//             </div>
//           </div>
//           <button className="signInBtn p-3 my-4 w-100">Sign in</button>
//           <p className="text">
//             <a href="#" className="me-auto forgotPass">
//               Forgot Password
//             </a>
//           </p>
//           <p className="signUp">
//             <span>
//               Don't have an account?
//               <button href="#" class="goToSignUpPage">
//                 Sign Up
//               </button>
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import FormInput from "../../components/form-input/FormInput.component";
import "./login.css";
import { useState } from "react";
import Button from "../../components/button/Button.component";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./../../redux/auth/authActions.action";

const defaultFormFields = {
  email: "",
  password: "",
};
function Login() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [user, setUser] = useState(auth.user);
  // console.log(log);

  // console.log(auth);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(formFields));
    resetFormFields();
  };
  return (
    <>
      {auth.isAuthenticated && navigate("/")}
      {!auth.isAuthenticated && (
        <div className="parent-log">
          <div className="container login px-4 px-md-5">
            <form
              className="my-4 w-100 m-auto"
              method="post"
              onSubmit={submitHandler}
            >
              <p className="heading">Sign in</p>
              <div className="box">
                {/* <p>Email</p> */}
                <div>
                  {/* <input
                type="text"
                autocomplete="off"
                placeholder="Enter your email"
              /> */}
                  <FormInput
                    // label="Email"
                    type="email"
                    autoComplete="off"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="box">
                {/* <p>Password</p> */}
                <div>
                  {/* <input
                type="Password"
                autocomplete="off"
                placeholder="Enter your password"
              /> */}
                  <FormInput
                    // label="Password"
                    type="password"
                    autoComplete="off"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              {/* 
          
          const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
           */}
              <Button className="signInBtn p-3 my-4 w-100" type="submit">
                Sign in
              </Button>
              <p className="text">
                <a href="#" className="me-auto forgotPass">
                  Forgot Password
                </a>
              </p>
              {/* <p className="signUp">
            <span>
              Don't have an account?
              <Button href="#" class="goToSignUpPage">
                Sign Up
              </Button>
            </span>
          </p> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// const mapDispatchToProps = (dispatch, userData) => {
//   return {
//     log: () => dispatch(login(userData)),
//   };
// };
export default Login;
