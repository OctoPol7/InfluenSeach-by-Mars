import React from 'react'


const NextBtn = props => {
    return<>
       <button onClick={props.onClick} className='btn'>{props.name}</button>
     </>
}



export default NextBtn;