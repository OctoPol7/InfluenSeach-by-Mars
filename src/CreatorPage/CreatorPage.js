import React,{useState} from 'react';
import Header from '../header.js'
import AddToCampainButton from './AddToCampainButton.js';
import CreatorImage from './CreatorImage.js';
import NameBoard from './NameBoardName.js';
import TopBanner from './TopBanner';
// import GridContainer from './GridContainer';


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
                <div className='textcont'>
                    <NameBoard />
                </div>
                {/* <GridContainer/> */}
            </div>
         </div>
         </div>
    </>
    )
}

export default CreatorPage;


