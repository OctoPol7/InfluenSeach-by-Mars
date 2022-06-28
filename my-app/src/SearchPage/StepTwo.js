import React, {useState} from 'react';
import FilterTag from "./FilterTag.js";

const StepTwo = props => {
//     return (
//       <>
//         <p> Step 2/3 </p>

//         <h2>Which geographical locations do you want to target?</h2>

//         <SearchInput
//           placeholder="eg.NewYork, Canada, Moscow"
//           grabLocation={props.grabLocation}
//           resetButton={props.resetButton}
//         />
//         {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//                 <FilterTag name="Gaming"/>
//                 <FilterTag name="Gaming"/>
//                 <FilterTag name="Gaming"/> 
//             <div style={{height:50,width:2,backgroundColor:'black',marginLeft:10,marginRight:10}}></div>

//                 <FilterTag name="Vancouver "/>
//                 <FilterTag name="Los Angeles"/>
//     </div> */}
//       </>
//     );
// }

const [keyword, setKeyword] = useState("");

  const keywordHandler = (event) => {
    setKeyword(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    props.grabLocation(keyword);

    setKeyword("");
  };

    return (
      <>
        <p>Step 1/3</p>
        <h2>Which geographical locations do you want to target?</h2>

        {/* <SearchInput
          grabKeyword={props.grabKeyword}
          resetButton={props.resetButton}
        /> */}
        <div
          className="search_inp_div"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <form onSubmit={addHandler}>
            <input
              className="search_input"
              type="text"
              placeholder="Canada, Europe, Dubai"
              value={keyword}
              onChange={keywordHandler}
            />
            <button type="submit">Add</button>
          </form>

          {props.keywordArray.map((key) => (
            <FilterTag name={key} />
          ))}

          {props.locationArray.map((loc) => (
            <FilterTag name={loc} />
          ))}

          <label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="reset_circle" onClick={props.resetButton}>
              Reset
            </div>
          </label>
        </div>
      </>
    );
}



export default StepTwo;