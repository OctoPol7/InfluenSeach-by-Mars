import React from 'react'
import ArchiveCampaign from '../ArchiveCampaign'
import axios from 'axios'

const DeleteButton = props => {
    
    const archiveCamp = (e) => {
        e.preventDefault();
        console.log(props.userData.token);

        const uid = props.userData.uid;
        const campaignName = props.campaignName; //replace with campaign name value
        const token = props.userData.token;
        const url = `http://localhost:4000/campaigns/${uid}/archive-campaign/${campaignName}`;

      
        axios
        .patch(url, null,
          {
            headers: {
              'Authorization': 'Bearer '+ token
            }
          }
        )
        .then((resData) => {
          console.log(resData.data.message);
        })
        .catch((error) => {
          console.log(error);
        });

        console.log('the button is clicked')
    }
    return <input type="button" value="Archive" onClick={archiveCamp} />;
}

export default DeleteButton;