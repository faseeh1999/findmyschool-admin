import React from 'react';

const Login = (props) => {

    const{
        email, 
        setEmail,
        password,
        setPassword,
        handleLogin,
        hasAccount,
        sethasAccount,
        emailError,
        passwordError,
    } = props;


    return(
      <section className= "login">

          
          <div className="loginContainer">
              <h2>Welcome to Find My School Admin Panel</h2>

              <label>Email</label>
              <input type = "text" 
              autoFocus 
              required value = {email} 
              onChange={e => setEmail(e.target.value)}
              
              />
            <p className="errorMsg"> {emailError}</p>
            <label>Password</label>
            <input type = "password" 
              autoFocus 
              required value = {password} 
              onChange={e => setPassword(e.target.value)}
              
              />
              <p className="errorMsg"> {passwordError}</p>

            <div className = "btnContainer">
                <button onClick = {handleLogin}>Log In</button>
            </div>





          </div>




      </section>
    )

    
}
export default Login;