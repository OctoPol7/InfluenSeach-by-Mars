import React from 'react'


const UserDetails = props => {
    return<>
        <div className='user-details'>
        <h2>{props.userData ? props.userData.userName : "USERNAME"}</h2>
        <p>Pro User</p>
        <p>Joined on May 2021</p>
        </div>
     </>
}



export default UserDetails;