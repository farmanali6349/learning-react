import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../Context/index'

function Profile() {
    const {user} = useContext(UserContext);

    if(user) {
        return (
            <>
            <h1>Assalam O Alaikum</h1>
            <h2>{user.userName}</h2>
            <h3>{user.userEmail}</h3>
            </>
        )
    }

    return (
        <h3>Please Sign Up</h3>
    )
  
}

export default Profile