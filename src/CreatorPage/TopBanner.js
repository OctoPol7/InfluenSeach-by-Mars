import React, { useState } from 'react'


const TopBanner = props => {
    const [modalshow,setModalShow] = useState(false);
    const [isAddtocamp,setIsAddtoCamp]=useState(true);

    function showmodal(value) {

    setIsAddtoCamp(true)
    setModalShow(value);
    }

    return<>
    <div className="top_Banner">
            <div className='top_Banner_bg'>

                <button className='popubtn' onClick={()=>showmodal(true)} >Add to campaign</button>

            </div>
            <img src="images/avatar.png" alt="avatar" className='avatar' />
            <div className='textcont'>
                <div className='namebord'>
                    <h3>John Doe</h3>
                    <p className='baner'>9876 Subscribers <a href="">visit channel</a></p>
                </div>
                <div className='score_card'>
                    <p>Score</p>
                    <h3>7.8</h3>
                </div>
            </div>


        </div>
        
     </>
}



export default TopBanner;