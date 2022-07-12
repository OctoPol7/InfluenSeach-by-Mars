import React from 'react';
import Header from '../header.js'
import TopBanner from './TopBanner';
import GridContainer from './GridContainer';


const CreatorPage = props => {
    return(
    <>
   
        <Header/>
        <div style={{padding:20}}>
        <TopBanner/>
        <GridContainer/>
        </div>
    </>
    )
}

export default CreatorPage;


