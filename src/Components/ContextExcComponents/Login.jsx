import React from 'react'
import './Login.css'
import { useContext } from 'react'
import { LoginContext } from './Contexts/LoginContext'

function Login() {

    const { setUsername, setShowProfile} = useContext(LoginContext)


  return (
    <>
    <div className='input-div'>
    <input 
        className='input-field'
        type="text"
        placeholder='Username'
        onChange={(event) => {
            setUsername(event.target.value);
        }}
      />
    <input className='input-field' type="password" placeholder='Password' />
    <button 
    className='input-button'
        onClick={() => {
            setShowProfile(true)
        }}
    >
        Click to show profile</button>
    </div>
    </>
  )
}

export default Login