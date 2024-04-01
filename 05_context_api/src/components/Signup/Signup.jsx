import React, { useState, useContext } from 'react'
import {UserContext} from '../../Context/index'
function Signup() {
    const {setUser} = useContext(UserContext);
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, userEmail})
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"
            value={userName}
            placeholder='Enter Your Name'
            onChange={(e)=> setUserName(e.target.value)}
             />

        <input 
            type="email" 
            placeholder='Enter Your Email'
            value={userEmail}
            onChange={(e)=> setUserEmail(e.target.value)}
             />
        <input type="submit" value="Sign Up"/>
    </form>
  )
}

export default Signup