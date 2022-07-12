import React, { useState } from 'react'
import Header from '../Header.js'
import CampStatContner from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import Inputs from './Inputs';
import Modal from './Modal';
import SearchInput from './SearchInputs.js'
import ArchivedCampaigns from './ArchivedCampaigns.js';
import CloseIcon from '../CloseIcon.png'



const Campaign = props => {

    const [modalshow,setModalShow] = useState(false);

    function showmodal(value) {

            setModalShow(value);
    }


    return(
    <div className='campaign-page'>

        <Header />
        <CampStatContner/>
        <SearchInput placeholder="Search for campaign"/>
        <CreateBtn click={()=>showmodal(true)}/>
        <CurCampContner/>
        <ArchivedCampaigns />



{modalshow?
        <div className='modal_overlay' >
            <div className='modal_content'>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h2>Create a new campaign</h2>
                    <button type="button" onClick={()=>showmodal(false)}><img src={CloseIcon} alt="Close"></img></button>
                </div>

                <div className='contnr'>
                    <h4>Campaign Name</h4>

                    <Inputs placeholder="Title" />

                    <h4>Create Description</h4>

                    <textarea placeholder='Type text below..' rows={5} style={{width:'100%',borderRadius:5,backgroundColor:'lightgray'}}></textarea>
                
                    <h4>Add target Keywords</h4>
                    <div className='modal_inputs'>
                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>
                        <div className='mchip'>
                            test
                        </div>
                    </div>

                    <button className='cbtn'>Create</button>
                </div>


            </div>
        </div>:null
}
      
        

    </div>   
    );
    
}

export default Campaign;