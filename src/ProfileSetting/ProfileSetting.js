import React from 'react'
import UserImage from './UserImage';
import UserDetails from './UserDetails';
import EmailNotification from './EmailNotification';
import EmailStates from './EmailStates';
import Email from './Email';
import Password from './Password';
import Delete from './Delete';
import Change from './Change'


const ProfileSetting = props => {
    
    return<>
    <div className='profile'>
        <div className='grid_container'>
            <div className='user-data'>
                <UserImage />
                <UserDetails />
            </div>
            <div className='items'>
                <div className='heading'>
                <h2>Settings</h2>
                </div>
                <h3>Email Notification</h3>
                <div className='email-notification settings'>
                    <EmailNotification />
                    <div className='toggle-button'>
                        <EmailStates />
                    </div>
                </div>
                <h3>Email</h3>
                <div className='email settings'>
                    <Email />
                    <Change />
                </div>
                <h3>Password</h3>
                <div className='password settings'>
                    <Password />
                    <Change />
                </div>
                <h3>Delete My account</h3>
                <div className='delete settings'>
                     <Delete />
                </div>
            </div>
     </div>
    </div>
     </>
}



export default ProfileSetting;