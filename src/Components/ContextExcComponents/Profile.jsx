import React from 'react'
import './Profile.css'
import { useContext } from 'react'
import { LoginContext } from './Contexts/LoginContext'

function Profile() {

    const { username } = useContext(LoginContext)
    console.log(username);

  return (
    <>
    <div className='user-info'>
    <div className='info-div'>
    <h4>Profile</h4>
    <h5>Username: {username}</h5>
    </div>
    </div>
    </>
  )
}

export default Profile