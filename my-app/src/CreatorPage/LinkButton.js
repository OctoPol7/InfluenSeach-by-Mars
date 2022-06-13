import React from 'react'
import TextInput from '../SignUp/TextInput';
import TextArea from './TextArea';
import SubmitButton from '../SignUp/SubmitButton';

const LinkButton = props => {
    return<>
      <button style={{background:"lightgreen"}}>Visit Channel</button>
      {/* <form style={{ border:"1px solid black", width:"500px",alignItems:"center"}}>
           <div><TextInput label="Choose Campain name"/> </div>
            <div><TextInput label="Create description"/></div>
            <div><TextInput label="Add Target Keywords"/></div>
            <div><SubmitButton label="Create" /></div>
           
        </form> */}
       </>
}

export default LinkButton;