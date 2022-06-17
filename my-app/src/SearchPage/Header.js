import React from 'react'
import NavLinks from './NavLinks.js';



const Header = props => {
    return<>
        <div style={{background: "wheat",height:100,display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <div style={{width:100,height:50,backgroundColor:'red',margin:25}}>
               
            </div>

            <div style={{width:'50%'}}>
                <NavLinks/>
            </div>
           
    
           
        </div>
     </>
}

export default Header;