import React,{useState} from 'react';
import Header from '../header.js'
import AddToCampainButton from './AddToCampainButton.js';
import CreatorImage from './CreatorImage.js';
import NameBoard from './NameBoardName.js';
import Inputs from './Inputs';
import Searchlist from './Searchlist';
import Tags from './Tags';
import ScoreCard from './ScoreCard.js';
import DisplayBlock from './DisplayBlock';
import Graph from './Graph.js';



const CreatorPage = props => {
    const [modalshow,setModalShow] = useState(false);
    const [isAddtocamp,setIsAddtoCamp]=useState(true);

    function showmodal(value) {
    setIsAddtoCamp(true)
    setModalShow(value);
    }
    
    return (
      <>
        <Header userData={props.userData} />
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
         </div>:null }
         </div>
         <div className="grid_container">

            <div>
                <h3 className='ml20'>Overview</h3>
                <div className='overviewBlocks'>
                    <DisplayBlock title="Video Uploads" content="645" />
                    <DisplayBlock title="Channel Age" content="5 Years" />
                    <DisplayBlock title="Country" content="Switzerland" />
                    <DisplayBlock title="Channel Type" content="Gaming" />

                </div>

                <h3 className='ml20'>Metrics</h3>
                <div className='overviewBlocks'>
                    <DisplayBlock title="Watch Time" content="645" />
                    <DisplayBlock title="Total Views" content="5 Years" />
                    <DisplayBlock title="New Viewers" content="Switzerland" />
                    <DisplayBlock title="Running Viewers" content="Gaming" />

                </div>
            </div>

            <div>
                <h3 className='ml20'>Latest Video</h3>

                <video src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" width="100%" className='video'  controls>
                </video>
                <h4 className='ml20'>Common Tags</h4>
                <div className='tag_cntnr'>
                    <Tags name="test"/> <Tags name="test"/> <Tags name="test"/>
                </div>
            </div>
        </div>
        <div className='graph'>
            <Graph />
        </div>
        </div>
         </div>
          
    </>
    )

}

export default CreatorPage;


