import React, { useState } from 'react'
import Step_one from './Step_one.js'
import Step_two from './Step_two.js'
import Step_three from './Step_three.js'
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
    
      if (step==0) {
        return <Step_one />;
      }
      else if(step==1){
        return <Step_two />;
      }
      else if(step==2){
        return <Step_three />;
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