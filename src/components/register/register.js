import { Link } from 'react-router-dom'
import './register.css'
function Register(){
    return(
        <div class="container register p-md-5 p-4">
        <form class="my-4 w-100 m-auto">
          <p class="heading">Sign up</p>
          <div class="box">
            <p>First Name</p>
            <div>
              <input
                type="text"
                autocomplete="off"
                placeholder="Enter your First Name"
              />
            </div>
          </div>
          <div class="box">
            <p>Last Name</p>
            <div>
              <input
                type="text"
                autocomplete="off"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>
          <div class="box">
            <p>Email</p>
            <div>
              <input
                type="email"
                autocomplete="off"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="box">
            <p>Password</p>
            <div>
              <input
                type="Password"
                autocomplete="off"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button class="signUpBtn p-3 my-4 w-100">Sign up</button>
          <p class="signIn">
            <span>Already have an account?<button class="signInBtn">Sign in</button></span>
          </p>
        </form>
      </div>
    )
}

export default Register