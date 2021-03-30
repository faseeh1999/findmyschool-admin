import React, {useState, useEffect} from 'react';
import fire from './fire';
import "./App.css";
import Login from './login';
import Hero from './hero';

const App = () =>{

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailError,setemailError] = useState("");
  const [passwordError,setpasswordError] = useState("");
  const [hasAccount,sethasAccount] = useState(false);

  const clearInputs = ()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = ()=>{
    setemailError('');
    setpasswordError('');
  }

  const handleLogin = ()=>{
    clearErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailError(err.message);
          break;
        case "auth/wrong-password":
          setpasswordError(err.message);
          break;
      }
    })
  }

  const handleLogout = () =>{
    fire.auth().signOut();

  }


 const authListener = () =>{
  if(user){
    clearInputs();
    setUser(user);
  }else{
    setUser("");
  }

 }


 useEffect(()=>{
    authListener();
 }, [])






  return(
    <div className = "App">

      {user  ? (<Hero
      
      handleLogout = {handleLogout}
      />):
      
      (

        <Login
      
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword={setPassword}
        handleLogin = {handleLogin}
        hasAccount = {hasAccount}
        sethasAccount = {sethasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
        
        
        />

      )
      
      }
      

      
    </div>
  );


};

export default App;
