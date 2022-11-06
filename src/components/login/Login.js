import './login.css'
function Login(){
    return(
        <div className="container login p-md-5 p-4">
        <form className="my-4 w-100 m-auto">
          <p className="heading">Sign in</p>
          <div className="box">
            <p>Email</p>
            <div>
              <input
                type="text"
                autocomplete="off"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="box">
            <p>Password</p>
            <div>
              <input
                type="Password"
                autocomplete="off"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <button className="signInBtn p-3 my-4 w-100">Sign in</button>
          <p className="text">
            <a href="#" className="me-auto">Forgot Password</a>
          </p>
          <p className="signUp">
            <span>Don't have an account?
            <button class="signInBtn">Sign Up</button></span>
          </p>
        </form>
      </div>
    
    )
}

export default Login