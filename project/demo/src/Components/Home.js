import React from 'react'
import {useState} from 'react'
import Dashboard from './Dashboard';
import Login from './Login';


function Home(props) {


const[email,setEmail]=useState("");
const[islogged,setIslogged]=useState(false);

const gmail=(email)=>{
setEmail(email)

}


const login=()=>{
    setIslogged(true);
}

const logout=()=>{
    setIslogged(false)
}

  return (
  <div>
  {!islogged && <Login  link={props.link} data={login}  mail={gmail}  />}  
  {islogged && <Dashboard out={logout}  mail={email} />}
  </div>
  )
}

export default Home