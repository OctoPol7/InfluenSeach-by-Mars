import React from 'react'
import UserDetails from './UserDetails';
import SettingsDetails from './SettingsDetails';


const ProfileSetting = props => {
    return<>
    <div className='profile'>
        <div className='grid_container'>
         <UserDetails />
         <SettingsDetails />
     </div>
    </div>
     </>
}



export default ProfileSetting;