import React from 'react';
import Header from '../header.js'
import TopBanner from './TopBanner';
// import GridContainer from './GridContainer';


const CreatorPage = props => {
    return(
    <>
   
        <Header/>
        <div className="creator">
            <div className="margin">
                <TopBanner/>
                {/* <GridContainer/> */}
            </div>
         </div>
    </>
    )
}

export default CreatorPage;


