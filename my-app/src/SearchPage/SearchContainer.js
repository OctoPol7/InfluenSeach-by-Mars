import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import StepOne from './StepOne.js'
import StepTwo from './StepTwo.js'
// import StepThree from './StepThree.js'
// import FilterTag from "./FilterTag.js";
import NextBtn from './NextBtn.js'


const SearchContainer = props => {

    const [ step,setStep ] = useState(0);
  
    const updateStep = ()=>{
  
      if (step < 2) {
        // let prevStep = step;
        setStep( step + 1 );
      }
      else {
        setStep(0);
      }
  
    }
  
    const RenderStep = ()=> {
    
      if (step === 0) {
        return (
          <StepOne
            grabKeyword={props.grabKeyword}
            resetButton={props.resetButton}
            keywordArray={props.keywordArray}
            locationArray={props.locationArray}
          />
        );
      }
      else if (step === 1){
        return (
          <StepTwo
            grabLocation={props.grabLocation}
            resetButton={props.resetButton}
            keywordArray={props.keywordArray}
            locationArray={props.locationArray}
          />
        );
      }
      else if (step === 2){
        return (
          
          <Route path="/search">
          <Redirect
            to="/searchresult"
            keywordArray={props.keywordArray}
            locationArray={props.locationArray}
          />
          </Route>
        
          // <StepThree
          //   keyword={props.keyword}
          //   setKeyword={props.setKeyword}
          // />
        );
      }
    
    }
  
      return (
        <>
          <div className="search_box">
            <h1>Find influencer for your next campaign</h1>
            <p className="sub_head">
              Serach the right influencers in 3 simple steps
            </p>

            <RenderStep />
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              
            </div> */}
            {/* <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {props.locationArray.map((loc) => (
                <FilterTag name={loc} />
              ))}
            </div> */}
            {/* {props.keywordArray.map((key) => (
              <FilterTag name={key} />
            ))}

            {props.locationArray.map((loc) => (
              <FilterTag name={loc} />
            ))} */}

            <NextBtn onClick={updateStep} name="Next" />
          </div>
        </>
      ); 
  }
  
  
  
  export default SearchContainer;