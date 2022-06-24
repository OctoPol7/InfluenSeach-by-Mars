import React, { useState } from 'react'
import StepOne from './StepOne.js'
import StepTwo from './StepTwo.js'
import StepThree from './StepThree.js'
import NextBtn from './NextBtn.js'


const SearchContainer = props => {


    const [step,setStep] = useState(0)
  
  
    // function greetUser() {
    //   alert("heloo")
    //   console.log("Hi there, user!");
    // }
  
  
    const updateStep = ()=>{
      // alert("helloo");
  
      if(step<2){
        setStep(step+1)
      }
      else{
        setStep(0)
      }
     
  
    }
  
  
    const RenderStep = ()=> {
    
      if (step===0) {
        return <StepOne />;
      }
      else if(step===1){
        return <StepTwo />;
      }
      else if(step===2){
        return <StepThree />;
      }
    
    }
  
      return<>
         <div className='search_box'>
  
          <h1>Find influencer for your next campaign</h1>
          <p className='sub_head'>Serach the right influencers in 3 simple steps</p>
  
          {<RenderStep/>}
          {/* <Step_one/> 
          <Step_two/>  */}
   
         <NextBtn  onClick={updateStep} name="Next"/>
  
        </div> 

       </> 
  }
  
  
  
  export default SearchContainer;