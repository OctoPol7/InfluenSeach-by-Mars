import React from 'react'
import AddToCampaign from './AddToCampaign';
import FliterTag from './FilterTag';
import Header from './Header';
import LinkButton from './LinkButton';
import PopupMessege from './PopupMessege';


const Creatorpage = props => {
    return<>
       <Header />
            <div style={{border:"1px ",margin:"20px"}}>
                <div style={{background:"gray"}}>
                    <div>Name of the creator</div>
                    <div>Subscriber Count</div>
                    <div>Profile picture</div>
                    <LinkButton />
                </div>
           
            <div >
                <h3>Overview</h3>
                <div style={{ display:'flex'}}>
                    <table style={{border: "1px solid black",height:"30px",alignItems:"flex-start"}}>
                        <tr>
                            <th >Video Uploads</th>
                            <th >Video Views</th>
                            <th >Channel Creation date</th>
                            <th >country</th>
                            <th >Channel type</th>
                        </tr>
                        <tr>
                            <td >value from API</td>
                            <td >value from API</td>
                            <td >value from API</td>
                            <td >value from API</td>
                            <td >value from API</td>
                        </tr>
                    </table>
                    <div style={{marginLeft:"300px"}}>
                        <h3>Latest video</h3>
                        <div style={{ width: "500px",border: "1px solid black",padding: "25px",alignItems:"flex-end"}}>Video from API</div>
                    </div>
                </div>
            </div>
        <FliterTag />
        <div style={{display:"flex"}}>
            <div>
                <h3>Daily Visitor </h3>
                <div style={{ width: "500px",border: "1px solid black",padding: "25px"}}>
                    graph     
                </div>   
            </div>
            <div style={{marginLeft:"25px"}}>
                <h3>Monthly Visitors</h3>
                <div style={{ width: "500px",border: "1px solid black",padding: "25px"}}>
                    graph     
                </div>

            </div>
        </div>
        <div style={{display:"flex"}}>
            <div>
                <h3>World Map </h3>
                <div style={{ width: "500px",border: "1px solid black",padding: "25px"}}>
                    graph     
                </div>   
            </div>
            <div style={{border: "1px solid black",margin:"30px"}}>
                <table>
                    <tr>
                        <th>Country</th>
                        <th>Visitor</th>
                        <th>%User</th>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                </table>
                    

            </div>
        </div>
        <AddToCampaign />
        <PopupMessege />
       </div>
       </>   
    
}

export default Creatorpage;