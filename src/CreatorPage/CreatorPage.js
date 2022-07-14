import React,{useState} from 'react';
import Header from '../header.js'
import AddToCampainButton from './AddToCampainButton.js';
import CreatorImage from './CreatorImage.js';
import NameBoard from './NameBoardName.js';
// import TopBanner from './TopBanner';
import Inputs from './Inputs';
import Searchlist from './Searchlist';
import Tags from './Tags';
import GridContainer from './GridContainer';
import ScoreCard from './ScoreCard.js';


const CreatorPage = props => {
    const [modalshow,setModalShow] = useState(false);
    const [isAddtocamp,setIsAddtoCamp]=useState(true);

    function showmodal(value) {

    setIsAddtoCamp(true)
    setModalShow(value);
    }
    return(
    <>
   
        <Header/>
        <div className="creator">
            <div className="margin">
            <div className="top_Banner">
                {/* <TopBanner/> */}
                <AddToCampainButton modalshow ={modalshow} isAddtocamp={isAddtocamp} showmodal={showmodal}/>
                    <CreatorImage />
                    <ScoreCard />
                <div className='textcont'>
                    <NameBoard />
                </div>
                <GridContainer/>
                        
                    {modalshow ?
                    <div className='modal_overlay' >
                     {isAddtocamp? 
                        <div className='modal_content'>

                        <div className='modal_style'>
                            <h3>Add to Campaign</h3>
                            <h3  className ='pointer' onClick={()=>showmodal(false)}>X</h3>
                        </div>

                        <div className='contnr'>
                        

                            <Inputs placeholder="Search a campaign" />

                            <Searchlist title="Campaign Name 1" subtitle="23 creators" />
                            <Searchlist title="Campaign Name 1" subtitle="23 creators" />
                            <Searchlist title="Campaign Name 1" subtitle="23 creators" />

                            
                            
                            

                            <button className='cbtn'>Add to Campaign</button>
                            <p onClick={()=>setIsAddtoCamp(false)} className="creat_capm_txt">Create new Capmapign</p>
                        </div>


                    </div> :  <div className='modal_content'>

            <div className='modal_style'>
                <h3>Create Campaign</h3>
                <h3 className='pointer' onClick={()=>showmodal(false)}>X</h3>
            </div>

            <div className='contnr'>
                <h4>Campaign Name</h4>

                <Inputs placeholder="Name" />

                <h4>Create Description</h4>

                <textarea placeholder='Type text below..' rows={5}  className ='textarea'></textarea>

                <h4>Add target Keywords</h4>
                <div className='modal_inputs'>
                <Tags name="test"/> <Tags name="test"/> <Tags name="test"/> <Tags name="test"/>
                </div>

                <button className='cbtn'>Create</button>
            </div>


            </div>
                    }
                    


                    </div>:null
            }
         </div>
         </div>
         </div>
          
    </>
    )
}

export default CreatorPage;


