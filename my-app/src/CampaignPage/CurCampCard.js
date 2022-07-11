import React from 'react'
import Tag from '../SearchPage/Tag';


const CurCampCard = props => {
    return<>
      <div className='curcamp_card' style={{flex:'1 0 33%'}}>
        <div className='toblock'>

        </div>
        
       
        <h3 style={{marginTop:10}}>Campaign ABC</h3>
        <p>23 Creators</p>

        <div className='chipcont'>

        <Tag name="Lifestyle" /> <Tag name="Lifestyle" />
        </div>

      </div>
     </>
}



export default CurCampCard;