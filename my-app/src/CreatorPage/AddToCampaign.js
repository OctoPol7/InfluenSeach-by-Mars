import React from 'react'
import CheckBox from './CheckBox';
import LinkButton from './LinkButton';
import SearchInput from './SearchInput';

const AddToCampaign = props => {
     
    
    return<> 
        <button onClick={e => alert(e. target. value)}>
        Add to Campaign
      </button>
      <SearchInput />
      <CheckBox />
      <LinkButton />
      
    </>
       
    
}

export default AddToCampaign;