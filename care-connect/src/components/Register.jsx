import React, {useState} from "react";


export const Register = (props) => {
  const [email, setEmail ] = useState('');
  const [pass, setPass ] = useState('');
  const [name, setName ] = useState('');
 

  const handleSubmit = (e) => {
    email.preventDefault();
    console.log(email);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label htmlfor = "name" > Full Name </label>
        <input value = {name}  name = "name"  id = "name" placeholder="Full Name" />
        <label htmlfor="email" >email</label>
        <input value = {email} onChange = { (e) => setEmail( e.target.value) }  type="email" placeholder="youremail@gmail.com" id = "email" name = "email"/>
        <label htmlfor="password" >password</label>
        <input value = {pass} onChange = { (e) => setPass( e.target.value) } type="password" placeholder="********" id = "password" name = "password"/>
        <button>Log In </button>
      </form>
      <button onClick={props.onFormSwitch("login")}>Have an account? Log In here. </button>
    </>
  )
    
  
}